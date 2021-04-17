import { render, RenderResult, configure } from '@testing-library/react'
import ColumnItem from '../../components/ColumnItem';
import { mockColumnEntities } from '../mocks/mockColumnEntities';
import TasksView from "../../containers/TasksView";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from '../../components/TaskItem';

configure({ testIdAttribute: 'id' })

let documentBody: RenderResult;

describe("<TasksView />", () => {
    beforeEach(() => {
        documentBody = render(<TasksView />);
    });

    test("Renders Column component correctly", async () => {

        expect(await documentBody.findByTestId('test-container')).toBeVisible();
        const dom = render(
            <DragDropContext onDragEnd={jest.fn()}>
                <ColumnItem
                    column={mockColumnEntities[132]}
                    handleRemoveColumn={jest.fn()}
                />
            </DragDropContext>
        );

        expect(await dom.queryAllByText(/Add task/i)).toHaveLength(2);
    });

    test("Renders at least one task", async () => {
        const task = mockColumnEntities[132].taskList[0];
        const column = mockColumnEntities[132];

        const dom = render(
            <DragDropContext onDragEnd={jest.fn()}>
                <Droppable droppableId={String(column.id)}>
                    {(provided) => (
                        <div className="column" {...provided.droppableProps} ref={provided.innerRef}>

                            <Draggable draggableId={String(task.id)} index={1} key={String(task.id)}>
                                {(provided) => (

                                    <TaskItem
                                        provided={provided}
                                        columnId={column.id}
                                        task={task}
                                        handleRemoveTask={jest.fn()}
                                    />
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );

        expect( dom.getByText(/Test second description/i)).toBeInTheDocument();

    });
});