import { Column, Task } from "../types";

export const getUpdatedColumnTaskList = (entities: Record<number, Column>, id: number, newTaskList: Task[]) => {
    entities[id] = {
        ...entities[id],
        taskList: newTaskList
    }

    return entities;
}