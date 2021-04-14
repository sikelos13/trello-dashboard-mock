import './App.scss';
import TasksView from './containers/TasksView';
import { Container } from './styles/task_view';

function App() {
  return (
    <Container>
      <TasksView />
    </Container>
  );
}

export default App;
