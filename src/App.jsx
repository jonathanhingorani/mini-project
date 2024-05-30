import React from 'react';
import './App.css';
import Navbar from './components/NavBar.jsx';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1 className="page-title">Page Title</h1>
        <p className="read-the-docs">WE SHOULD DO A TO-DO LIST APP</p>
        <TaskList />
      </div>
    </div>
  );
}

export default App;