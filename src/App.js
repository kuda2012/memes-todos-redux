import React from "react";
import "./App.css";
import MemeForm from "./MemeForm";
import MemeBox from "./MemeBox";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
function App() {
  return (
    <div className="App">
      {/* <MemeForm />
      <MemeBox /> */}
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
