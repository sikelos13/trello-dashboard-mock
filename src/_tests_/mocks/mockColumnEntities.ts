import { Column } from "../../types";
import { mockTaskList  } from "./mockTaskList";

export const mockColumnEntities: Record<number, Column> = {
    131: {
        id: 131,
        title: 'Second column',
        canBeDeleted: true,
        taskList: []
    },
    132: {
        id: 123,
        title: 'First column',
        canBeDeleted: false,
        taskList: mockTaskList
    },
    133: {
        id: 124,
        title: 'Third column',
        canBeDeleted: false,
        taskList: mockTaskList
    }
}