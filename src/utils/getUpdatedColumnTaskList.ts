import { Column, Task } from "../types";

export const getUpdatedColumnTaskList = (list: any, id: number, newTaskList: Task[]) => {
    return list.map((item: Column) => {
        if(item.id === Number(id)) {
            return {
                ...item,
                taskList: newTaskList
            } as Column
        }
        return item;
    });
}