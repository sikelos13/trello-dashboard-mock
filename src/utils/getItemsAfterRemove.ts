import { Column, Task } from "../types";

export const getListAfterRemove = (list: any, id: number) => {
    return list.filter((item: Column | Task) => {
        return item.id !== Number(id);
    });
}

export const getEntitiesAfterRemove = (entities: Record<number, Column>, id: number) => {
    delete entities[id];
    return entities;
}