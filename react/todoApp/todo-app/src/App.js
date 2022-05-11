import NavBar from './components/NavBar';
import Body from './components/Body';
import GetTodos from './components/GetTodos';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Body></Body>
      <GetTodos></GetTodos>
    </div>
  );
}

export default App;
