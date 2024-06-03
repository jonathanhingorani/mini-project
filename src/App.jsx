import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TaskList from "./components/TaskList.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TaskDetailsPage from "./pages/TaskDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:taskId" element={<TaskDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
