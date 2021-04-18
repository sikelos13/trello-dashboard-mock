import { getListAfterRemove } from '../../utils/getItemsAfterRemove';
import { Task } from "../../types";

const mockTaskList: Task[] = [
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
    id: 123,
    title: 'First task',
    description: 'Test first description',
    timeEstimation: {
      hours: 17,
      minutes: 10
    },
    priority: 0
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

describe("Return new list after removal", () => {
  test("it should return new task list after removing task", () => {
    const output = [
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
        id: 123,
        title: 'First task',
        description: 'Test first description',
        timeEstimation: {
          hours: 17,
          minutes: 10
        },
        priority: 0
      }
    ];
    expect(getListAfterRemove(mockTaskList, 124)).toEqual(output);

  });
});