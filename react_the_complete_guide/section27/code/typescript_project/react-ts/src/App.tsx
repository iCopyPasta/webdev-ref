import Todos from './components/Todos';
import Todo from "./models/todo";

const TODOS = [
  new Todo("Learn React"),
  new Todo("Learn Typescript")
];

function App() {
  return (
    <div>
      <Todos items={TODOS}/>
    </div>
  );
}

export default App;
