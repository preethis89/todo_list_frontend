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
        <Task text = "1. Take vitamins" urgent ={true}  status ="completed"/>
        <Task text = "2. Do the dishes" urgent ={false} status ="pending"/>
        <Task text = "3. Go for a walk" urgent ={true} status ="completed"/>
        <Task text = "4. Complete the Exercise" urgent ={true} status ="pending"/>
        
      </div>
     
    </div>
  );
}

export default App;
