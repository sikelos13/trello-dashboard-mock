import { Task } from "../../types";

export const mockSortedTaskListLowest: Task[] = [
    {
        id: 124,
        title: 'Third task',
        description: 'Test third description',
        timeEstimation: '07:20',
        priority: 2
    },
    {
        id: 122,
        title: 'Second task',
        description: 'Test second description',
        timeEstimation: '20:10',
        priority: 1
    },
    {
        id: 123,
        title: 'First task',
        description: 'Test first description',
        timeEstimation: '17:30',
        priority: 0
    }
  
]

export const mockSortedTaskListHighest: Task[] = [
    {
        id: 123,
        title: 'First task',
        description: 'Test first description',
        timeEstimation: '17:30',
        priority: 0
    },
    {
        id: 122,
        title: 'Second task',
        description: 'Test second description',
        timeEstimation: '20:10',
        priority: 1
    },
    {
        id: 124,
        title: 'Third task',
        description: 'Test third description',
        timeEstimation: '07:20',
        priority: 2
    }
]