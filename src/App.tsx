import React from "react";
import { RecoilRoot } from "recoil";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  return (
    <RecoilRoot>
      <TaskInput />
      <TaskList />
    </RecoilRoot>
  );
}

export default App;
