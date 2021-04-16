import React, { memo, useState } from 'react';
import { Task } from '../types';
import { Box, Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { DraggableProvided } from 'react-beautiful-dnd';
import { updateLocalStorageTask } from '../utils/updateLocalStorageTask';

interface TaskItemProps {
    task: Task;
    provided: DraggableProvided;
    columnId: number;
    handleRemoveTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = memo(({ task, handleRemoveTask, provided, columnId }: TaskItemProps) => {
    const [taskTitle, setTitle] = useState(task.title);
    const [taskDescription, setDescription] = useState(task.description);
    const [taskPriority, setPriority] = useState(task.priority);
    const [taskEstimation, setEstimation] = useState(task.timeEstimation);
    const providedProp: DraggableProvided = provided;

    const handleEdit = (event: any) => {
        const { value, name } = event.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'estimation') {
            setEstimation(value);
        } else {
            setDescription(value);
        }
    }

    const handlePriority = (event: any) => {
        const { value } = event.target;
        setPriority(value);
    }

    const handleTaskOnBlur = () => {
        const updatedTask = {
            ...task,
            title: taskTitle,
            description: taskDescription,
            priority: taskPriority,
            timeEstimation: taskEstimation
        } as Task

        updateLocalStorageTask(task.id, columnId, updatedTask);
    }

    return (
        <div
            ref={(ref) => { providedProp.innerRef(ref) }}
            {...providedProp.draggableProps}
            {...providedProp.dragHandleProps}
        >
            <Box
                maxHeight="300px"
                width="300px"
                display="flex"
                flexDirection="column"
                p="10px"
            >
                <Box component={Card} p={"10px"}>
                    <Box mb="15px">
                        <Input
                            placeholder="Insert task title here"
                            name="title"
                            fullWidth
                            value={taskTitle}
                            onBlur={handleTaskOnBlur}
                            onChange={handleEdit}
                        />
                        <Input
                            type="number"
                            fullWidth
                            placeholder="Priority"
                            name="priority"
                            style={{ marginTop: '5px' }}
                            value={taskPriority}
                            onBlur={handleTaskOnBlur}
                            onChange={handlePriority}
                        />
                    </Box>

                    <TextField
                        name="description"
                        multiline
                        fullWidth
                        rows={5}
                        onBlur={handleTaskOnBlur}
                        placeholder="Insert your description here"
                        value={taskDescription}
                        onChange={handleEdit}
                    />

                    <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                        <TextField
                            id="time"
                            label="Estimation"
                            type="time"
                            name="estimation"
                            value={taskEstimation}
                            onBlur={handleTaskOnBlur}
                            onChange={handleEdit}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ step: 300 }}
                            style={{ marginTop: '10px' }}
                        />

                        <Button
                            size="small"
                            color="secondary"
                            onClick={() => handleRemoveTask(task.id)}>
                            Remove task
                    </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
});

export default TaskItem;