import { Column } from "../types";

export const getUpdatedColumnList = (list: Column[], columnId: number) => {
    return list.filter((column: Column) => {
        return column.id !== Number(columnId);
    });
}