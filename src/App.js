import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./Task/TaskCount";
import Task from "./Task/Task"
import Addtask from "./Task/Addtask"

function App() {
  return (
    <div className="App">
      <Header />
      <TaskCount />
      <main>
        <Addtask />
      
        
      </main>
      <div> 
        <Task text = "Take vitamins" urgent ={true}  status ="completed"/>
        <Task text = "Do the dishes" urgent ={false} status ="pending"/>
        <Task text = "Go for a walk" urgent ={true} status ="completed"/>
        <Task text = "Complete the Exercise" urgent ={true} status ="pending"/>
        
      </div>
     
    </div>
  );
}

export default App;
