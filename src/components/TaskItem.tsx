import React, { memo, useState } from 'react';
import { Task } from '../types';
import { Box, Button, FormLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { DraggableProvided } from 'react-beautiful-dnd';
import { updateLocalStorageTask } from '../utils/updateLocalStorageTask';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
            priority: Number(taskPriority),
            timeEstimation: taskEstimation
        } as Task

        updateLocalStorageTask(columnId, updatedTask);
    }

    const handleSetTime = (event: any) => {
        const { value, name } = event.target;

        const updatedEstimation = {
            ...taskEstimation,
            [name]: value
        }
        setEstimation(updatedEstimation);
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
                        <TextField
                            placeholder="Insert task title here"
                            label="Title"
                            name="title"
                            fullWidth
                            value={taskTitle}
                            onBlur={handleTaskOnBlur}
                            onChange={handleEdit}
                        />
                        <TextField
                            type="number"
                            label="Priority"
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

                    <Box  mt="5px">
                        <Box component={FormLabel}>Estimation time</Box>
                    </Box>

                    <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                        <Box display="flex" alignItems="center" width="125px" mt="5px">
                            <input
                                type="number"
                                placeholder="HH"
                                name="hours"
                                min={1}
                                max={99}
                                style={{ marginRight: '5px' }}
                                value={taskEstimation.hours}
                                onBlur={handleTaskOnBlur}
                                onChange={handleSetTime}
                            />
                                :
                                <input
                                type="number"
                                placeholder="MM"
                                min={1}
                                max={99}
                                name="minutes"
                                style={{ marginLeft: '5px' }}
                                value={taskEstimation.minutes}
                                onBlur={handleTaskOnBlur}
                                onChange={handleSetTime}
                            />
                            <Box alignSelf="flex-end" ml="5px">
                                <AccessTimeIcon />
                            </Box>
                        </Box>

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