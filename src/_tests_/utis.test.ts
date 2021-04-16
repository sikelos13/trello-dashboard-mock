
import { getSortedTaskList } from '../utils/getSortedTaskList';
import { mockTaskList } from './mocks/mockTaskList';
import { mockSortedTaskListLowest, mockSortedTaskListHighest } from './mocks/sortedTaskList';
import { generateId } from '../utils/GeneratedID';
import { getListAfterRemove, getEntitiesAfterRemove } from '../utils/getItemsAfterRemove';
import { mockColumnEntities } from './mocks/mockColumnEntities';
import { getUpdatedColumnTaskList } from '../utils/getUpdatedColumnTaskList';
import { isObjectEmpty } from '../utils/isObjectEmpty';

  describe("Return the list sorted", () => {
    test("it should return list of tasks from highest to lowest priority", () => {
      const output = mockSortedTaskListHighest;
      expect(getSortedTaskList(mockTaskList,"highest_priority")).toEqual(output);
  
    });

    test("it should return list of tasks from lowest to highest priority", () => {
        const output = mockSortedTaskListLowest;
        expect(getSortedTaskList(mockTaskList, "lowest_priority")).toEqual(output);
    
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
        },
        {
            id: 123,
            title: 'First task',
            description: 'Test first description',
            timeEstimation: '17:30',
            priority: 0
        }
    ];
      expect(getListAfterRemove(mockTaskList,124)).toEqual(output);
  
    });

    test("it should return new column object after success remove of column", () => {
        const output = {
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
      };
        expect(getEntitiesAfterRemove(mockColumnEntities, 131)).toEqual(output);
    
      });
  });

  describe("Return updated column", () => {
    test("it should return new task list after removing task", () => {
      const output = [
        {
          id: 123,
          title: 'First task',
          description: 'Test first description',
          timeEstimation: '17:30',
          priority: 0
      },
      {
          id: 124,
          title: 'Third task',
          description: 'Test third description',
          timeEstimation: '07:20',
          priority: 2
      }
      ]

    expect(getListAfterRemove(mockTaskList,122)).toEqual(output);
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


