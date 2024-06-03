import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const nav = useNavigate();
  function handleNavigate() {
    nav("/");
  }

  return (
    <div>
      <h1>Error 404, page not found</h1>
      <h3>Would you like to return to the dashboard?</h3>
      <button onClick={handleNavigate}>Go home</button>
    </div>
  );
};

export default NotFoundPage;
