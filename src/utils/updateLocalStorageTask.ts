import { Task } from "../types";

export const updateLocalStorageTask = (columnId: number , updatedTask: Task) => {
    const columnEntities = JSON.parse(localStorage.getItem('columnEntities') || '{}');
    const selectedColumn = columnEntities[columnId]

    const updatedTaskList = selectedColumn.taskList.map((task: Task) => {
        if (updatedTask.id === task.id) {
            return updatedTask
        }
        return task
    })

    columnEntities[columnId] = {
        ...columnEntities[columnId],
        taskList: updatedTaskList
    }

    localStorage.setItem('columnEntities', JSON.stringify(columnEntities));
}