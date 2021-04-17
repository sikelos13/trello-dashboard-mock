import { render, RenderResult, configure } from '@testing-library/react'
import ColumnItem from '../../components/ColumnItem';
import { mockColumnEntities } from '../mocks/mockColumnEntities';
import TasksView from "../../containers/TasksView";
import { DragDropContext } from 'react-beautiful-dnd';

configure({testIdAttribute: 'id'})

let documentBody: RenderResult;

describe("<TasksView />", () => {
  beforeEach(() => {
    documentBody = render(<TasksView />);
  });

  test("Renders Column component correctly",  async () => {

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
});