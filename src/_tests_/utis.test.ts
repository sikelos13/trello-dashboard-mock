
import { mockTaskList, mockTaskListV2 } from './mocks/mockTaskList';
import { generateId } from '../utils/GeneratedID';
import { getListAfterRemove, getEntitiesAfterRemove } from '../utils/getItemsAfterRemove';
import { mockColumnEntities, beforeDropEntities, afterDropEntities } from './mocks/mockColumnEntities';
import { isObjectEmpty } from '../utils/isObjectEmpty';
import { getUpdatedDraggedItems } from '../utils/getUpdatedDraggedItems'
import { getSortedTaskList } from '../utils/getSortedTaskList';
import { updateLocalStorageTask } from '../utils/updateLocalStorageTask';


describe("Return the list sorted", () => {
  test("it should return list of tasks from highest to lowest priority", () => {
    const output = [
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
    ];
    localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
    expect(getSortedTaskList(132, "highest_priority")).toEqual(output);

  });

  test("it should return list of tasks from lowest to highest priority", () => {
    const output = [
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

    ];
    localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
    expect(getSortedTaskList(132, "lowest_priority")).toEqual(output);

  });
});

describe("Return the updated entities", () => {
  test("it should return entities updated with new task values", () => {
    const taskList = [

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
      },
    ];

    const task =
    {
      id: 124,
      title: 'Third task',
      description: 'Test third description',
      timeEstimation: '07:20',
      priority: 2
    };

    const outputEntities = {
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
        taskList: taskList
      },
      133: {
        id: 133,
        title: 'Third column',
        canBeDeleted: false,
        taskList: mockTaskListV2
      }
    }
    localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
    updateLocalStorageTask(132, task);
    const columnEntities = JSON.parse(localStorage.getItem('columnEntities') || '{}');
    expect(columnEntities).toEqual(outputEntities);


  });
});

describe("Return updated task", () => {
  test("it should return entities with updated task list", () => {
    expect(generateId()).toBeGreaterThan(1);
  });
});


describe("Return drag and drop object", () => {
  const source = {
    index: 1,
    droppableId: 132
  }

  const destination = {
    index: 1,
    droppableId: 133
  }

  const result = getUpdatedDraggedItems(mockColumnEntities, source, destination);

  test("it should return beforeDropEntities", () => {
    const output = beforeDropEntities;

    expect(result.beforeDropEntities).toEqual(output);
  });

  test("it should return afterDropEntities", () => {
    const output = afterDropEntities;

    expect(result.afterDropEntities).toEqual(output);
  });
});

describe("Return random generated id", () => {
  test("it should return an id", () => {
    expect(generateId()).toBeGreaterThan(1);
  });
});

describe("Return new list after removal", () => {
  test("it should return new task list after removing task", () => {
    const output = [
      {
        id: 122,
        title: 'Second task',
        description: 'Test second description',
        timeEstimation: '20:10',
        priority: 1
      }
    ];
    expect(getListAfterRemove(mockTaskList, 124)).toEqual(output);

  });

  // test("it should return new column object after success remove of column", () => {
  //   const output = {
  //     132: {
  //       id: 132,
  //       title: 'First column',
  //       canBeDeleted: false,
  //       taskList:  [
  //         {
  //             id: 122,
  //             title: 'Second task',
  //             description: 'Test second description',
  //             timeEstimation: '20:10',
  //             priority: 1
  //         },
  //         {
  //             id: 124,
  //             title: 'Third task',
  //             description: 'Test third description',
  //             timeEstimation: '07:20',
  //             priority: 2
  //         }
  //     ]
  //     },
  //     133: {
  //       id: 133,
  //       title: 'Third column',
  //       canBeDeleted: false,
  //       taskList: mockTaskListV2
  //     }
  //   };
  //   expect(getEntitiesAfterRemove(mockColumnEntities, 131)).toEqual(output);

  // });
});

describe("Return true or false if object is empty", () => {
  test("it should return false when object is not empty", () => {
    const obj = {
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

    expect(isObjectEmpty(obj)).toEqual(false);
  });

  test("it should return true when object is not empty", () => {
    const obj = {}

    expect(isObjectEmpty(obj)).toEqual(true);
  });
});