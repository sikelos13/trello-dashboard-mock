import './App.scss';
import MoviesView from './containers/MoviesView';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <MoviesView />
    </Container>
  );
}

export default App;
