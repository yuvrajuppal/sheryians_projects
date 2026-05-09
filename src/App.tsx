import React from "react";
import Loome from "./Projectnew/loome/Loome";
import Pickachu from "./Projectnew/Pickachu/Pickachu";
import PokedexUI from "./Projectnew/pokimon/PokedexUI";
import Homepage from "./page/Homepage";
import { Routes, Route } from "react-router-dom";
import { Projects } from "./Projectslist";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {Projects.map((items) => {
          return <Route path={items.href} element={items.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
