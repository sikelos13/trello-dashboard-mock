
import { mockTaskList, mockTaskListV2 } from './mocks/mockTaskList';
import { generateId } from '../utils/GeneratedID';
import { getListAfterRemove, getEntitiesAfterRemove } from '../utils/getItemsAfterRemove';
import { mockColumnEntities, beforeDropEntities,afterDropEntities } from './mocks/mockColumnEntities';
import { isObjectEmpty } from '../utils/isObjectEmpty';
import { getUpdatedDraggedItems } from '../utils/getUpdatedDraggedItems'

describe("Return drag and drop object", () => {
  const source = {
    index: 1,
    droppableId: 132
  }

  const destination = {
    index: 1,
    droppableId: 133
  }

 const result =  getUpdatedDraggedItems(mockColumnEntities,source, destination);

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
      expect(getListAfterRemove(mockTaskList,124)).toEqual(output);
  
    });

    test("it should return new column object after success remove of column", () => {
        const output = {
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
      };
        expect(getEntitiesAfterRemove(mockColumnEntities, 131)).toEqual(output);
    
      });
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


