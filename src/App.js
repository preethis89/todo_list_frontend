import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
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
      id: 1,
    },
    {
      todo: "Do the dishes",
      status: "pending",
      priority: "urgent",
      dueDate: "2020-05-12",
      id: 2
    },
    {
      todo: "Go for a walk",
      status: "completed",
      priority: "urgent",
      dueDate: "2020-03-30",
      id: 3
    },
    {
      todo: "Complete the exercise",
      status: "pending",
      priority: "can wait",
      dueDate: "2020-04-02",
      id: 4
    }
  ]);
  const removeHandleClick = id => {
    const filteredTodo = task.filter(taskItem => {
      return taskItem.id !== id;
    });
    setTasks(filteredTodo);
  };

  const completedHandleClick = id => {
    const completedTodo = task.filter(taskItem => {
      if (taskItem.id === id) {
        taskItem.status = "completed";
      }
      return task;
    });
    setTasks(completedTodo);
  }
  const addNewTask = (tasktext, date, priority) => {

    const addTask = {
      todo: tasktext,
      dueDate: date,
      priority: priority,
      status: "pending",
      id: Math.random() * 100,
    };


    const newTasks = [...task, addTask];


    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <TaskCount count={task.length} />
      <main>
        <Addtask addNewTaskFunc={addNewTask} />
      </main>
      <div>
        {task.map(task => {
          return (
            <Task
              key={task.id}
              deleteTaskFn={removeHandleClick}
              completedTaskFn={completedHandleClick}
              text={task.todo}
              status={task.status}
              priority={task.priority}
              dueDate={task.dueDate}
              id={task.id}
            />);
        })}

      </div>
      <div>
      <Footer />
      </div>
      
    </div>
    
  );
}
export default App;
