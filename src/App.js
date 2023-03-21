
import './App.css';
//import TaskCard from './MyFirstComponent/TaskCard'
import TaskContainer from './MyFirstComponent/taskContainer/TaskContainer';

function App() {

  const date = [
    {
      id : "T-1",
      status : "Todo",
      name : "Create a Design System for Enum Workspace.",
      dueDate : new Date(2022, 5, 23)
    },
    {
      id : "T-2",
      status : "Complete",
      name : " 12 Create a Design System for Enum Workspace.",
      dueDate : new Date(2022, 5, 25)
    },
    {
      id : "T-3",
      status : "In progress",
      name : " 14 Create a Design System for Enum Workspace.",
      dueDate : new Date(2022, 5, 30)
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Manager</h2>
        <TaskContainer data={date}/>
      </header>
    </div>
  );
}

export default App;
