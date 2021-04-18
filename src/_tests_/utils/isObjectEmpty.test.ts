import { isObjectEmpty } from '../../utils/isObjectEmpty';
import { mockTaskList } from '../mocks/mockTaskList';

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


describe("Return true or false if object is empty", () => {
    test("it should return false when object is not empty", () => {
      expect(isObjectEmpty(obj)).toEqual(false);
    });
  
    test("it should return true when object is not empty", () => {
      const obj = {}
  
      expect(isObjectEmpty(obj)).toEqual(true);
    });
  });