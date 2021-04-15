import { Column } from "../types";

export const updateLocalStorage = (id: number, updatedColumn: Column) => {
    const columnsList = JSON.parse(localStorage.getItem('columnsList') || '{}');

    const updatedColumnList = columnsList.map((column: Column) => {
        if (id === column.id) {
            return updatedColumn
        }

        return column
    })
    localStorage.setItem('columnsList', JSON.stringify(updatedColumnList));
}