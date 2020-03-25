import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task"
import Addtask from "./Addtask/Addtask"

function App() {
  const [task, setTasks] = useState([
    {
      todo: "Take vitamins",
      status: "completed",
      priority: "urgent",
      dueDate: "2020-05-02",
      id:1,
    },
    {
      todo: "Do the dishes",
      status: "pending",
      priority: "urgent",
      dueDate: "2020-05-12",
      id:2
    },
    {
      todo: "Go for a walk",
      status: "completed",
      priority: "urgent",
      dueDate: "2020-03-30",
      id:3
    },
    {
      todo: "Complete the exercise",
      status: "pending",
      priority: "can wait",
      dueDate: "2020-04-02",
      id:4

    }
  ]);
  return (
    <div className="App">
      <Header />
      <TaskCount count={task.length} />
      <main>
        <Addtask />


      </main>
      <div>
        {task.map(task =>{
          return(
          <Task 
          key={task.id} 
          text={task.todo} 
          status={task.status} 
          priority={task.priority}
          dueDate = {task.dueDate}
          /> );
          })}
        
      </div>

    </div>
  );
}

export default App;
