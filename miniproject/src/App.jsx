import "./App.css";
import "./components/NavBar";
import "./components/Footer";
import "./components/SideBar";
import "./assets/tasks.json";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div>
        <h1 className="page-title">Page Title</h1>
      </div>
      <p className="read-the-docs">WE SHOULD DO A TO-DO LIST APP</p>
      <TaskList/>
    </>
  );
}

export default App;
