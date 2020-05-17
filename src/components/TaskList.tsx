import React from "react";
import { useRecoilValue } from "recoil";
import { taskState } from "../atoms/Task";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useRecoilValue(taskState);

  return (
    <ul>
      {tasks.map((t, index) => {
        return <TaskItem task={t} index={index} key={index} />;
      })}
    </ul>
  );
};

export default TaskList;
