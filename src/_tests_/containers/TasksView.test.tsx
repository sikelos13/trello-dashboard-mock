import TasksView from "../../containers/TasksView";
import { render, RenderResult } from '@testing-library/react'
import ColumnItem from "../../components/ColumnItem";
import { Droppable, Draggable } from 'react-beautiful-dnd';

const  column = {
    id: 131,
    title: 'Second column',
    canBeDeleted: true,
    taskList: []
}

let documentBody: RenderResult;

describe("<TasksView />", () => {
    beforeEach(() => {
        documentBody = render(<TasksView />);
    });

    test("Renders <Header /> component correctly", () => {
        expect(documentBody.getByText(/Ticket management/i)).toBeInTheDocument();
    });

    test("Renders button correctly", () => {
        expect(documentBody.getByText('Add task')).toBeInTheDocument();
    });
});