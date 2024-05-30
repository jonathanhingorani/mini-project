import React from 'react';
import './App.css';
import Navbar from './components/NavBar.jsx';
import TaskList from './components/TaskList';
import { Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <div>
        <SideBar/>
        <Routes>
          <Route path='/' element={<TaskList /> } />
          {/* <Route path='/taskDetail/:taskId' element={<TaskDetail /> } /> */}
        </Routes> 
      </div>
      <Footer/>
    </>
    
    
  );
}

export default App;