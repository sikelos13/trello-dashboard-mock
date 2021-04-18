import { Column, Task } from '../../types';

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
        taskList: [{
            id: 122,
            title: 'Second task',
            description: 'Test second description',
            timeEstimation: {
                hours: 17,
                minutes: 10
            },
            priority: 1
        },
        {
            id: 124,
            title: 'Third task',
            description: 'Test third description',
            timeEstimation: {
                hours: 17,
                minutes: 10
            },
            priority: 2
        },
        ]
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: []
    }
}

const outPutTaskList: Task[] = [

    {
        id: 122,
        title: 'Last task',
        description: 'Test second description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 1
    },
    {
        id: 124,
        title: 'Third task',
        description: 'Test third description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 2
    },
];

export const task =
{
    id: 122,
    title: 'Last task',
    description: 'Test second description',
    timeEstimation: {
        hours: 17,
        minutes: 10
    },
    priority: 1
}

export const outputEntities = {
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
        taskList: outPutTaskList
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: []
    }
}