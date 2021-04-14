import { Task, SortType } from "../types";

export const getSortedTaskList = (taskList: Task[], sortBy: SortType) => {
    let sortedTaskList = [] as Task[];

    if(sortBy === "highest_priority") {
        sortedTaskList = [...taskList].sort((taskA: Task, taskB: Task) => taskB['priority'] - taskA['priority']);
    } else if (sortBy === "lowest_priority") {
        sortedTaskList = [...taskList].sort((taskA: Task, taskB: Task) => taskA['priority'] - taskB['priority']);
    }

    return sortedTaskList;
}