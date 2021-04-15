
import React, { Component } from "react";
import Header from "../components/Header";
import { Column, Task } from '../types';
import { generateId } from '../utils/GeneratedID';
import Box from "@material-ui/core/Box";
import ColumnItem from '../components/ColumnItem';
import { getUpdatedList } from "../utils/getUpdatedList";
import { Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { getUpdatedDraggedItems } from "../utils/getUpdatedDraggedItems";
import { getUpdatedColumnTaskList } from "../utils/getUpdatedColumnTaskList";

export interface TaskManagementViewState {
    columnList: Column[];
}

class TaskManagementView extends Component<{}, TaskManagementViewState> {
    constructor(props: any) {
        super(props);

        this.state = {
            columnList: []
        };
    }

    componentDidMount() {
        this.setColumns();
    }

    setColumns = () => {
        const { columnList } = this.state;

        const initColumn = {
            id: generateId(),
            title: `Test Column ${columnList.length + 1}`,
            canBeDeleted: false,
            sortTaskBy: '',
            taskList: [],
            averageTime: null
        } as Column

        this.setState({ columnList: [initColumn] });
        localStorage.setItem('columnsList', JSON.stringify([initColumn]));
    }

    handledAddColumn = () => {
        const { columnList } = this.state;

        const newColumn = {
            id: generateId(),
            title: `Test Column ${columnList.length + 1}`,
            canBeDeleted: false,
            sortTaskBy: '',
            taskList: [],
            averageTime: null
        } as Column

        const updatedList = [...columnList, newColumn];

        this.setState({ columnList: updatedList });
        localStorage.setItem('columnsList', JSON.stringify(updatedList));
    }

    handleRemoveColumn = (id: number) => {
        const { columnList } = this.state;
        const updatedColumnList = getUpdatedList(columnList, id);

        this.setState({ columnList: updatedColumnList });
    }

    handleClearBoard = () => {
        localStorage.clear();
        this.setState({ columnList: [] })
    }

    reorder = (list: Column, startIndex: any, endIndex: any) => {
        const result = list.taskList;
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    onDragEnd = (event: any) => {
        const { columnList } = this.state;
        const { draggableId, source, destination } = event;

        if (!destination || !draggableId) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const { columnList } = this.state;
            const sourceColumn = columnList.find((column: Column) => String(column.id) === source.droppableId);
            
            if(sourceColumn) {
                const taskList = this.reorder(sourceColumn, source.index, destination.index);
                const updatedColumnList = getUpdatedColumnTaskList(columnList, Number(source.droppableId), taskList);
    
                this.setState({ columnList: updatedColumnList });
            }
            return;
        }

        const updatedColumnList = getUpdatedDraggedItems(columnList, source, destination, draggableId);
        this.setState({ columnList: updatedColumnList });
    }

    setUpdatedColumn = (id: number, taskList: Task[]) => {
        const { columnList } = this.state;
        const updatedColumnList = getUpdatedColumnTaskList(columnList, id, taskList);
        this.setState({ columnList: updatedColumnList });
    }

    render() {
        const { columnList } = this.state;

        return (
            <Box style={{ overflowX: 'auto' }}>
                <Header handledAddColumn={this.handledAddColumn} handleClearBoard={this.handleClearBoard} />
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Container style={{ maxWidth: "1500px" }}>
                        <Box display="flex" flexDirection="row" mt={10} p="10px">
                            {columnList && columnList.length > 0
                                ? columnList.map((column: Column) => {
                                    return (
                                        <ColumnItem
                                            key={column.id}
                                            column={column}
                                            setUpdatedColumn={this.setUpdatedColumn}
                                            handleRemoveColumn={this.handleRemoveColumn}
                                        />
                                    )
                                })
                                : null
                            }
                        </Box>
                    </Container>
                </DragDropContext>
            </Box>
        );
    }
}

export default TaskManagementView;