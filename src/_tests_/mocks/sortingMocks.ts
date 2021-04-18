import { Column, Task } from '../../types';

const mockUnsortedList: Task[] = [
    {
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
        id: 125,
        title: 'Fifth task',
        description: 'Test five description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 3
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
    }
]

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
        taskList: mockUnsortedList
    },
    133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: []
    }
}

export const highestPriorityList: Task[] = [
    {
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
    {
        id: 125,
        title: 'Fifth task',
        description: 'Test five description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 3
    }
];

export const lowestPriorityList: Task[] = [
    {
        id: 125,
        title: 'Fifth task',
        description: 'Test five description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 3
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
    {
        id: 122,
        title: 'Second task',
        description: 'Test second description',
        timeEstimation: {
            hours: 17,
            minutes: 10
        },
        priority: 1
    }
];