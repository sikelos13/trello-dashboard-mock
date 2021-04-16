import React, { memo, useState, useEffect } from 'react';
import { Column, Task } from '../types';
import { generateId } from '../utils/GeneratedID';
import TaskItem from './TaskItem';
import { Box, Button, FormLabel } from '@material-ui/core';
import { getSortedTaskList } from '../utils/getSortedTaskList';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from '@material-ui/core/Card';
import { Input } from '@material-ui/core';
import { getListAfterRemove } from '../utils/getItemsAfterRemove';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { updateLocalStorageColumn } from '../utils/updateLocalStorageColumn';

interface ColumnItemProps {
    column: Column;
    handleRemoveColumn: (id: number) => void;
}

const ColumnItem: React.FC<ColumnItemProps> = memo(({ column, handleRemoveColumn }: ColumnItemProps) => {
    const [columnTitle, setTitle] = useState(column.title);
    const [tasksList, setNewTaskList] = useState<Task[]>([]);
    const [initialList, setInitialList] = useState<Task[]>(column.taskList);
    const [sortByPriority, setSortPriority] = useState("");
    const [tasksLength, setTaskLength] = useState(0);

    useEffect(() => {
        setNewTaskList(column.taskList);
        setInitialList(column.taskList);
        setTaskLength(column.taskList.length);
    }, [column.taskList]);

    const handleEditTitle = (event: any) => {
        const { value } = event.target;
        setTitle(value);
    }

    const handleAddTask = () => {
        const newTask = {
            id: generateId(),
            title: 'new task title',
            description: '',
            timeEstimation: "07:30",
            priority: tasksList.length
        }

        const updatedList = [...tasksList, newTask];

        const updatedColumn = {
            ...column,
            title: columnTitle,
            taskList: updatedList
        } as Column

        setNewTaskList(updatedList);
        setInitialList(updatedList);
        setTaskLength(updatedList.length);
        updateLocalStorageColumn(column.id, updatedColumn);
    }

    const handleSortChange = (event: any) => {
        const { value } = event.target;
        let sortedMoviesList = [] as Task[];

        setSortPriority(value);

        if (value === "") {
            setNewTaskList(initialList);
            return;
        }

        sortedMoviesList = getSortedTaskList(tasksList, value);
        setNewTaskList(sortedMoviesList);
    }

    const handleRemoveTask = (id: number) => {
        const updatedTaskList = getListAfterRemove(tasksList, id);
        setTaskLength(updatedTaskList.length);

        const updatedColumn = {
            ...column,
            taskList: updatedTaskList
        } as Column

        setNewTaskList(updatedTaskList);
        updateLocalStorageColumn(column.id, updatedColumn);
    }

    const handleOnBlur = () => {
        const updatedColumn = {
            ...column,
            title: columnTitle
        } as Column

        updateLocalStorageColumn(column.id, updatedColumn);
    }

    return (
        <Droppable droppableId={String(column.id)}>
            {(provided) => (
                <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
                    <Box
                        component={Card}
                        maxHeight="900px"
                        height="900px"
                        width="320px"
                        minWidth="320px"
                        display="flex"
                        flexDirection="column"
                        mr="20px"
                        style={{ overflowY: 'auto', backgroundColor: '#f7f8fb' }}
                    >
                        <Box display="flex" flexDirection="column" p={1}>
                            <Box display="flex" justifyContent="space-between">
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={handleAddTask}>
                                    Add task
                                </Button>
                                <Button
                                    size="small"
                                    color="secondary"
                                    disabled={column.canBeDeleted || tasksList.length > 0}
                                    onClick={() => handleRemoveColumn(column.id)}>
                                    Remove column
                                </Button>
                            </Box>
                            <Box>
                                <Box mt="5px" display="flex" alignItems="baseline" justifyContent="space-between">
                                    <Box component={FormLabel} mr="10px">Column title</Box>
                                    <Input
                                        placeholder="Insert column title"
                                        value={columnTitle}
                                        onBlur={handleOnBlur}
                                        onChange={handleEditTitle}
                                        style={{ width: "60%" }}
                                    />
                                </Box>
                                {tasksList.length > 0 &&
                                    <>
                                        <Box mt="5px" display="flex" alignItems="baseline" justifyContent="space-between">
                                            <Box component={FormLabel} mr="10px">Sort by</Box>
                                            <NativeSelect
                                                value={sortByPriority}
                                                onChange={handleSortChange}
                                                style={{ width: "60%" }}
                                            >
                                                <option value="">Default</option>
                                                <option value="highest_priority">Highest priority</option>
                                                <option value="lowest_priority">Lowest priority</option>
                                            </NativeSelect>
                                        </Box>
                                        <Box mt="5px" display="flex">
                                            <Box component={FormLabel} mr="10px">Total tasks:</Box>
                                            <Box>{tasksLength}</Box>
                                        </Box>
                                    </>
                                }
                            </Box>
                        </Box>

                        {tasksList && tasksList.length > 0
                            ? tasksList.map((task: Task, index: number) => {
                                return (
                                    <Draggable draggableId={String(task.id)} index={index} key={String(task.id)}>
                                        {(provided) => (
                                            <TaskItem task={task} columnId={column.id} handleRemoveTask={handleRemoveTask} provided={provided} />
                                        )}
                                    </Draggable>
                                )
                            })
                            : null
                        }
                    </Box>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
});

export default ColumnItem;