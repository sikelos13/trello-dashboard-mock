export interface Column {
    id: number;
    title: string;
    canBeDeleted: boolean;
    taskList: Task[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    timeEstimation: Estimation;
    priority: number;
}

interface Estimation {
    hours: number;
    minutes: number;
}

export type SortType = "highest_priority" | "lowest_priority" | "" | string;
