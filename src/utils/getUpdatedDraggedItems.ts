import { Column } from "../types";

export const getUpdatedDraggedItems = (list: Column[], source: any, destination: any, draggableId: string) => {
    const sourceColumn = list.find((column: Column) => String(column.id) === source.droppableId);
    const destinationColumn= list.find((column: Column) => String(column.id) === destination.droppableId);

    if (!sourceColumn || !destinationColumn) {
        return list;
    }

    const [removedItem] = sourceColumn.taskList.splice(source.index, 1);
    destinationColumn.taskList.splice(destination.index, 0, removedItem);

    const updatedColumnList = list.map((column: Column) => {
        if (column.id === Number(source.droppableId)) {
            const updatedColumn = {
                ...column,
                taskList:  sourceColumn.taskList
            } as Column

            return updatedColumn;
        }

        if (column.id === Number(destination.droppableId)) {
            const updatedColumn = {
                ...column,
                taskList: destinationColumn.taskList
            } as Column

            return updatedColumn;
        }
        return column;
    })

    return updatedColumnList;
}