
import { updateLocalStorageTask } from '../../utils/updateLocalStorageTask';
import { mockColumnEntities, task, outputEntities } from '../mocks/updateLocalStorageTasMocks'

describe("Return the updated entities", () => {
  test("it should return entities updated with new task values", () => {

    localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
    updateLocalStorageTask(132, task);
    const columnEntities = JSON.parse(localStorage.getItem('columnEntities') || '{}');
    expect(columnEntities).toEqual(outputEntities);
  });
});