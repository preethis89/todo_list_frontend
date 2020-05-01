import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TaskCount from "./Task/TaskCount";
import Task from "./Task/Task";
import Addtask from "./Addtask/Addtask";


function App() {
  const [task, setTasks] = useState([]);
  useEffect(()=>{
    axios.get("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then(response =>{
      console.log(response.data);
      setTasks(response.data);
    })
    .catch(err=>{
      console.log("failed",err);
    });
  },[])
  
  const removeHandleClick = id => {
    axios.delete(`https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
    .then(response =>{
      console.log("deleted",response);
      const filteredTodo = task.filter(taskItem => {
        return taskItem.taskId !== id;
      });
      setTasks(filteredTodo); 
    })
    .catch(err =>{
      console.log("API error",err);
    });
    
  };

  const completedHandleClick = id => {
    axios.put(`https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,{status:true})
    .then(response=>{
      const completedTodo = task.filter(taskItem => {
        if (taskItem.taskId === id) {
          taskItem.status = 1;
        }
        return task;
      });
      setTasks(completedTodo);

    })
    .catch(err=>{
       console.log("Error in task updation",err);
    });
   
  };
  const addNewTask = (text, dueDate, priority) => {
    axios.post("https://m9bspcv03c.execute-api.eu-west-1.amazonaws.com/dev/tasks",{
      text:text,
      date:dueDate,
      priority:priority
    })
    .then(response=>{
      const addTask = response.data;
      const newTasks = [...task, addTask];
    setTasks(newTasks);
    })
    .catch(err=>{
      console.log("Error adding the task",err);
    })  
  }


  return (
    // <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
      <Header />

      <TaskCount count={task.length} />
      <div className="add-task">
        <Addtask addNewTaskFunc={addNewTask} />
      </div>
      <div className="my-4">
      <div className="card card-body shadow">
        {task.map(task => {
          return (
            <Task
              key={task.taskId}
              deleteTaskFn={removeHandleClick}
              completedTaskFn={completedHandleClick}
              text={task.text}
              status={task.status}
              priority={task.priority}
              dueDate={task.date}
              id={task.taskId}
            />);
        })}

      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>


  );
}
export default App;
