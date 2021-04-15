import { Column, Task } from "../types";

export const getUpdatedList = (list: any, id: number) => {
    return list.filter((item: Column | Task) => {
        return item.id !== Number(id);
    });
}