import { Column } from "../../types";
import { mockTaskList, mockTaskListV2,mockTaskListV4, mockTaskListV3  } from "./mockTaskList";

export const mockColumnEntities: Record<number, Column> = {
    131: {
        id: 131,
        title: 'Second column',
        canBeDeleted: true,
        taskList: []
    },
    132: {
        id: 132,
        title: 'First column',
        canBeDeleted: false,
        taskList: mockTaskList
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: mockTaskListV2
    }
}

export const beforeDropEntities: Record<number, Column> = {
    131: {
        id: 131,
        title: 'Second column',
        canBeDeleted: true,
        taskList: []
    },
    132: {
        id: 132,
        title: 'First column',
        canBeDeleted: false,
        taskList: mockTaskListV4
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: mockTaskListV2
    }
}


export const afterDropEntities: Record<number, Column> = {
    131: {
        id: 131,
        title: 'Second column',
        canBeDeleted: true,
        taskList: []
    },
    132: {
        id: 132,
        title: 'First column',
        canBeDeleted: false,
        taskList: mockTaskListV4
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: mockTaskListV3
    }
}