import React from "react";
import { MyRoutes } from "../MyRoutes";
import { Routes, Route, Router } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <Routes>
        {MyRoutes.map(({ id, path, element, title }) => (
          <Route key={id} path={path} element={element} title={title} />
        ))}
      </Routes>
    </div>
  );
};

export default Routing;
