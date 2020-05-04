import React from "react";
import "./App.css";
import ComponentOne from "./components/componentOne";
import ComponentTwo from "./components/componentTwo";
import ComponentThree from "./components/componentThree";

const App = () => {
  return (
    <div>
      <p>Запрос на GET http://localhost:7070/data </p>
      <ComponentOne />

      <p>Запрос на GET http://localhost:7070/error </p>
      <ComponentTwo />

      <p>Запрос на GET http://localhost:7070/loading </p>
      <ComponentThree />
    </div>
  );
};

export default App;
