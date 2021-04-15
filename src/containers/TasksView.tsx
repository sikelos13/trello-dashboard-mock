
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

        this.setState({ columnList: [initColumn] })
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

        this.setState({ columnList: updatedList })
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

    onDragEnd = (event: any) => {
        const { columnList } = this.state;
        const { draggableId, source, destination } = event;
        const destinationId = destination ? destination.droppableId : null;
        const sourceId = source.droppableId;

        if(!destinationId || !draggableId) {
            return;
        }

        const updatedColumnList = getUpdatedDraggedItems(columnList, sourceId, destinationId, draggableId);
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
                    <Container style={{ maxWidth: "1500px"}}>
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