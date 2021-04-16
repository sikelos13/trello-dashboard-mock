import { Column } from "../types";

export const updateLocalStorageColumn = (id: number, updatedColumn: Column) => {
    const entities = JSON.parse(localStorage.getItem('columnEntities') || '{}');

    entities[id] = updatedColumn;
    localStorage.setItem('columnEntities', JSON.stringify(entities));
}