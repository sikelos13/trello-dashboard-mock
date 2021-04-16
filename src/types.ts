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
    timeEstimation: Date | string | null;
    priority: number;
}

export type SortType = "highest_priority" | "lowest_priority" | "" | string;
