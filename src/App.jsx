import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [tasks, setTasks] = useState([
    { title: "Read the project brief", description: "Detailed brief", id: 1 },
    { title: "Create a project repository", description: "Setup repo", id: 2 },
    {
      title: "Create React application using Vite",
      description: "Setup React",
      id: 3,
    },
    {
      title: "Finish Day 1 Development Tasks",
      description: "Complete tasks",
      id: 4,
    },
    {
      title: "Finish Day 1 Research Tasks",
      description: "Research tasks",
      id: 5,
    },
    {
      title: "Finish Day 2 Development Tasks",
      description: "Development tasks",
      id: 6,
    },
    {
      title: "Finish Day 2 Research Tasks",
      description: "Research tasks",
      id: 7,
    },
  ]);

  return (
    <div className="app-container">
      <Navbar /> {/* Render the Navbar component */}
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<DashboardPage tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/details/:taskId"
            element={<TaskDetailsPage tasks={tasks} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
