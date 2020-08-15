import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.jsx'
import List from './components/List';
import TasksService from './services/tasks'

function App() {
  const [tasks,setTasks]=useState([])

  const getTasks = async()=>{
    const data = await TasksService.getTasks()
    setTasks(data)
  }

  useEffect(()=>{
    getTasks()
  },[])

  return (
    <div className="App">
      <div className="App-container">
        <div className="App_wrapper">
          <Form getTasks={getTasks}></Form>
          <List tasks={tasks} getTasks={getTasks}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
