import logo from './logo.svg';
import './App.css';
import CounterView from './features/counter/CounterView';
import TodoView from './features/todo/TodoView';


function App() {
 
  return (
    <div className="App">
       <CounterView /> 
       <TodoView></TodoView>
    </div>
  );
}

export default App;
