import { Task, SortType } from "../types";

export const getSortedTaskList = (columnId: number, sortBy: SortType) => {
    const columnEntities = JSON.parse(localStorage.getItem('columnEntities') || '{}');
    const selectedColumn = columnEntities[columnId];
    const taskList = selectedColumn.taskList
    let sortedTaskList = [] as Task[];

    if(sortBy === "highest_priority") {
        sortedTaskList = [...taskList].sort((taskA: Task, taskB: Task) => taskA['priority'] - taskB['priority']);
    } else if (sortBy === "lowest_priority") {
        sortedTaskList = [...taskList].sort((taskA: Task, taskB: Task) => taskB['priority'] - taskA['priority']);
    }

    return sortedTaskList;
}