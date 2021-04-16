import { Column } from "../types";

export const getUpdatedDraggedItems = (entities: Record<number, Column>, source: any, destination: any) => {
    const sourceColumn = entities[source.droppableId];
    const destinationColumn = entities[destination.droppableId];
    let newEntities: Record<number, Column> = {};

    if (!sourceColumn || !destinationColumn) {
        return entities;
    }

    const [removedItem] = sourceColumn.taskList.splice(source.index, 1);
    destinationColumn.taskList.splice(destination.index, 0, removedItem);

    newEntities = {
        ...entities,
        [destination.droppableId]: destinationColumn,
        [source.droppableId]: sourceColumn
    }

    return newEntities
}