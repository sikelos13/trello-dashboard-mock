import { Column, Task } from "../types";
import { getUpdatedList } from "./getUpdatedList";

export const getUpdatedDraggedItems = (list: Column[], sourceId: string, destinationId: string, draggableId: string) => {
    const sourceColumnList = list.find((column: Column) => String(column.id) === sourceId);
    const draggableItem = sourceColumnList && sourceColumnList.taskList.find((task: Task) => String(task.id) === draggableId);

    const updatedColumnList = list.map((column: Column) => {
        if (column.id === Number(sourceId)) {
            const updatedColumn = {
                ...column,
                taskList: getUpdatedList(column.taskList, Number(draggableId))
            } as Column

            return updatedColumn;
        }

        if (column.id === Number(destinationId)) {
            const updatedColumn = {
                ...column,
                taskList: [...column.taskList, draggableItem]
            } as Column

            return updatedColumn;
        }

        return column;
    })

    return updatedColumnList;
}