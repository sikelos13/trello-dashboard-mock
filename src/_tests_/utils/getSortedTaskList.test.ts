import { getSortedTaskList } from '../../utils/getSortedTaskList';
import { mockColumnEntities, lowestPriorityList, highestPriorityList } from '../mocks/sortingMocks';

describe("Return the list sorted", () => {
    test("it should return list of tasks from highest to lowest priority", () => {

        localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
        expect(getSortedTaskList(132, "lowest_priority")).toEqual(lowestPriorityList);

    });

    test("it should return list of tasks from lowest to highest priority", () => {

        localStorage.setItem('columnEntities', JSON.stringify(mockColumnEntities));
        expect(getSortedTaskList(132, "highest_priority")).toEqual(highestPriorityList);

    });
});