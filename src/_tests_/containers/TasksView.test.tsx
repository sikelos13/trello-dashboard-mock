import TasksView from "../../containers/TasksView";
import { render, RenderResult } from '@testing-library/react'

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