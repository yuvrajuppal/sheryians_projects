import React from "react";
import Loome from "./Projectnew/loome/Loome";
import Pickachu from "./Projectnew/Pickachu/Pickachu";
import PokedexUI from "./Projectnew/pokimon/PokedexUI";
import Homepage from "./page/Homepage";
import { Routes, Route } from "react-router-dom";
import { ProjectsAssignment1, ProjectsAssignment2 } from "./Projectslist";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {ProjectsAssignment1.map((items) => {
          return <Route path={items.href} element={items.element} />;
        })}
        {ProjectsAssignment2.map((items) => {
          return <Route path={items.href} element={items.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
