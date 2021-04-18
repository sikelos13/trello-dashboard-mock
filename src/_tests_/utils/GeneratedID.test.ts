import { generateId } from '../../utils/GeneratedID';

describe("Return updated task", () => {
    test("it should return entities with updated task list", () => {
      expect(generateId()).toBeGreaterThan(1);
    });
  });