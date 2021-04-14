import React, { memo, useState } from 'react';
import { Column, Task } from '../types';
import styled from 'styled-components'
import { Box } from '../styles/Box';
import { generateId } from '../utils/GeneratedID';

interface TaskItemProps { 
    task: Task;  
}

const TaskItem: React.FC<TaskItemProps> = memo(({ task }: TaskItemProps) => {
    const [taskTitle, setTitle] = useState(task.title);
    const [taskDescription, setDescription] = useState(task.description);
    const [selectedMovieTrailer, setSelectedMovieTrailer] = useState("");
    const [selectedMovieReviews, setSelectedMovieReviews] = useState<any>([]);
    const [selectedMovieSimilar, setSelectedMovieSimilar] = useState("No similar movies");

    const handleEdit = (event: any) => {
        const { value, name } = event.target;
        if(name === 'title') {
            setTitle(value);
        } else {
            setDescription(value);
        }
    }

    const handlePriority = () => {

    }

    return (
        <CustomTask maxHeight="300px" backgroundColor="#ffffff" width="300px" display="flex" direction="column">
            <Box>
                <Box>
                    <TaskInputTitle 
                        type="text" 
                        placeholder="Insert task title here" 
                        name="title" 
                        value={taskTitle} 
                        onChange={handleEdit} 
                    />
                    <TaskPriority 
                        type="number" 
                        placeholder="Priority" 
                        name="priority" 
                        onChange={handlePriority}
                    />
                </Box>

                <TaskDescription 
                    name="description" 
                    placeholder="Insert your description here" 
                    value={taskDescription} 
                    onChange={handleEdit} 
                />
            </Box>
        </CustomTask>
    )
});

const CustomTask = styled(Box)`
    border-radius: 5px;
    border: 1px solid black;
    height: 200px;
    margin: 5px;
    box-shadow: 0px 9px 16px -6px rgba(0,0,0,0.56);
`

const TaskInputTitle = styled.input`
    width: 200px;
    height: 25px;
    padding: 5px;
    margin: 5px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #e3eeff;
`

const TaskPriority = styled.input`
    width: 50px;
    height: 25px;
    padding: 5px;
    margin: 5px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #e3eeff;
`

const TaskDescription = styled.textarea`
    width: 280px;
    margin: 5px;
    outline: 0;
    resize: none;
    border-width: 0;
`

export default TaskItem;