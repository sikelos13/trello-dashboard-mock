import { Column } from "../types";

export const getUpdatedDraggedItems = (entities: any, source: any, destination: any) => {
    const sourceColumn = entities[source.droppableId];
    const destinationColumn = entities[destination.droppableId];
    let afterDropEntities: Record<number, Column> = {};
    let beforeDropEntities: Record<number, Column> = {};

    if (!sourceColumn || !destinationColumn) {
        return entities;
    }

    const [removedItem] = sourceColumn.taskList.splice(source.index, 1);
    beforeDropEntities = {
        ...entities,
        [source.droppableId]: sourceColumn
    }

    destinationColumn.taskList.splice(destination.index, 0, removedItem);

    afterDropEntities = {
        ...entities,
        [destination.droppableId]: destinationColumn,
    }

    return {
        beforeDropEntities,
        afterDropEntities
    }
}