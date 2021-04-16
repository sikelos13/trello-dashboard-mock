
import React, { Component } from "react";
import Header from "../components/Header";
import { Column } from '../types';
import { generateId } from '../utils/GeneratedID';
import Box from "@material-ui/core/Box";
import ColumnItem from '../components/ColumnItem';
import { getEntitiesAfterRemove } from "../utils/getItemsAfterRemove";
import { Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { getUpdatedDraggedItems } from "../utils/getUpdatedDraggedItems";
import { getUpdatedColumnTaskList } from "../utils/getUpdatedColumnTaskList";
import { isObjectEmpty } from "../utils/isObjectEmpty";

export interface TaskManagementViewState {
    columnEntities: Record<number, Column>;
}

class TaskManagementView extends Component<{}, TaskManagementViewState> {
    constructor(props: any) {
        super(props);
        this.state = { columnEntities: {} };
    }

    componentDidMount() {
        this.getColumns();
    }

    getColumns = () => {
        const { columnEntities } = this.state;
        const localStorageColumnList = JSON.parse(localStorage.getItem('columnEntities') || '{}');

        if (localStorageColumnList && !isObjectEmpty(localStorageColumnList)) {
            this.setState({ columnEntities: localStorageColumnList });
        } else {
            const initColumn = {
                id: generateId(),
                title: `Test Column ${Object.keys(columnEntities).length + 1}`,
                canBeDeleted: false,
                taskList: [],
                averageTime: null
            } as Column

            this.setState({ columnEntities: { [initColumn.id]: initColumn } });
            localStorage.setItem('columnEntities', JSON.stringify({ [initColumn.id]: initColumn }));
        }
    }

    handledAddColumn = () => {
        const { columnEntities } = this.state;
        const localStorageColumnList = isObjectEmpty(JSON.parse(localStorage.getItem('columnEntities') || '{}'))
            ? columnEntities
            : JSON.parse(localStorage.getItem('columnEntities') || '{}');

        const newColumn = {
            id: generateId(),
            title: `Test Column ${Object.keys(columnEntities).length + 1}`,
            canBeDeleted: false,
            taskList: [],
            averageTime: null
        } as Column

        localStorageColumnList[newColumn.id] = newColumn;

        this.setState({ columnEntities: localStorageColumnList }, () => {
            localStorage.setItem('columnEntities', JSON.stringify(localStorageColumnList));
        });
    }

    handleRemoveColumn = (id: number) => {
        const { columnEntities } = this.state;
        const updatedEntities = getEntitiesAfterRemove(columnEntities, id);

        this.setState({ columnEntities: updatedEntities }, () => {
            localStorage.setItem('columnEntities', JSON.stringify(updatedEntities));
        });
    }

    handleClearBoard = () => {
        localStorage.clear();
        this.setState({ columnEntities: {} })
    }

    reorder = (list: Column, startIndex: any, endIndex: any) => {
        const result = list.taskList;
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    onDragEnd = (event: any) => {
        const { columnEntities } = this.state;
        const { source, destination } = event;
        const localStorageEntities = isObjectEmpty(JSON.parse(localStorage.getItem('columnEntities') || '{}'))
            ? columnEntities
            : JSON.parse(localStorage.getItem('columnEntities') || '{}');

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            //reorder if  column is the same both for source and destination
            const sourceColumn = localStorageEntities[source.droppableId];

            if (sourceColumn) {
                const taskList = this.reorder(sourceColumn, source.index, destination.index);
                const updatedReorderEntities = getUpdatedColumnTaskList(localStorageEntities, Number(source.droppableId), taskList);

                this.setState({ columnEntities: updatedReorderEntities }, () => {
                    localStorage.setItem('columnEntities', JSON.stringify(updatedReorderEntities));
                });
            }
        } else {
            const updatedEntities = getUpdatedDraggedItems(localStorageEntities, source, destination);
            this.setState({ columnEntities: updatedEntities.beforeDropEntities }, () => {
                this.setState({ columnEntities: updatedEntities.afterDropEntities });
                localStorage.setItem('columnEntities', JSON.stringify(updatedEntities.afterDropEntities));
            });
        }
    }

    render() {
        const { columnEntities } = this.state;

        return (
            <Box style={{ overflowX: 'auto' }}>
                <Header handledAddColumn={this.handledAddColumn} handleClearBoard={this.handleClearBoard} />
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Container style={{ maxWidth: "1500px" }}>
                        <Box display="flex" flexDirection="row" mt={10} p="10px">
                            {columnEntities && Object.keys(columnEntities).length > 0
                                ? Object.keys(columnEntities).map((key: string) => {
                                    const column = columnEntities[Number(key)];
                                    return (
                                        <ColumnItem
                                            key={column.id}
                                            column={column}
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