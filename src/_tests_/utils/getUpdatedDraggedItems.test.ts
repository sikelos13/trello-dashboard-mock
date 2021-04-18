import { getUpdatedDraggedItems } from '../../utils/getUpdatedDraggedItems'
import { mockColumnEntities, beforeDropEntities, afterDropEntities } from './../mocks/mockColumnEntities';

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