
import { getSortedTaskList } from '../utils/getSortedTaskList';
import { mockTaskList } from './mocks/mockTaskList';
import { mockSortedTaskListLowest, mockSortedTaskListHighest } from './mocks/sortedTaskList';

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
