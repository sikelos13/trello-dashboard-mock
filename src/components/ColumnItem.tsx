import React, { memo, useState } from 'react';
import { Column, Task } from '../types';
import styled from 'styled-components'
import { Box } from '../styles/Box';
import { generateId } from '../utils/GeneratedID';
import TaskItem from './TaskItem';
import { PrimaryButton, SecondaryButton } from '../styles/Button/Button.base';
import { getSortedTaskList } from '../utils/getSortedMoviesList';
interface ColumnItemProps {
    column: Column;
    handleRemoveColumn: (event: any) => void;
}

const ColumnItem: React.FC<ColumnItemProps> = memo(({ column, handleRemoveColumn }: ColumnItemProps) => {
    const [columnTitle, setTitle] = useState(column.title);
    const [tasksList, setNewTaskList] = useState<Task[]>(column.taskList);
    const [initialList, setInitialList] = useState<Task[]>(column.taskList);
    const [sortByPriority, setSortPriority] = useState("");

    const handleEditTitle = () => {

    }

    const handleAddTask = () => {
        const newTask = {
            id: generateId(),
            title: 'new task title',
            description: '',
            timeEstimation: null,
            priority: tasksList.length
        }
        const updatedList = [...tasksList, newTask];

        setNewTaskList(updatedList);
        setInitialList(updatedList);
    }

    const handleSortChange = (event: any) => {
        const { value } = event.target;
        setSortPriority(value);
        let sortedMoviesList = [] as Task[];

        if(value === "") {
            setNewTaskList(initialList)
            return;
        }

        sortedMoviesList = getSortedTaskList(tasksList, value);
        setNewTaskList(sortedMoviesList);
    }

    return (
        <CustomColumn 
            maxHeight="1200px" 
            minHeight="800px" 
            backgroundColor="#fff" 
            width="320px" 
            minWidth="320px" 
            display="flex" 
            direction="column"
            overflowY="auto"
            mr={15}
        >
            <Box display="flex" direction="column" align="center">
                <Box>
                    <PrimaryButton onClick={handleAddTask}>Add task</PrimaryButton>
                    <CustomSecondaryButton value={column.id} onClick={handleRemoveColumn}>Remove column</CustomSecondaryButton>
                    {tasksList.length > 0 &&
                        <Box mt={10}>
                            <select
                                value={sortByPriority}
                                onChange={handleSortChange}
                            >
                                <option value="">Default</option>
                                <option value="highest_priority">Highest priority</option>
                                <option value="lowest_priority">Lowest priority</option>
                            </select>
                        </Box>
                    }
                </Box>
                <ColumnInputTitle type="text" name="name" value={columnTitle} onChange={handleEditTitle} />
               
            </Box>
            {tasksList && tasksList.length > 0
                ? tasksList.map((task: Task) => {
                    return (
                        <TaskItem key={task.id} task={task} />
                    )
                })
                : null
            }
        </CustomColumn>
    )
});

const CustomColumn = styled(Box)`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 5px;
    width: 300px;
    height: 420px;
    padding: 8px;
`

const CustomSecondaryButton = styled(SecondaryButton)`
    margin-left: 5px;
`

const ColumnInputTitle = styled.input`
    width: 200px;
    height: 25px;
    padding: 5px;
    margin: 5px;
`

export default ColumnItem;