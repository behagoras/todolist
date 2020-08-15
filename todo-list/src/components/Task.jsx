import React, { useState } from 'react'
import './Task.css'
import TasksService from '../services/tasks'

export default function Element({task, getTasks=()=>{}}) {
  const [checked,setChecked]=useState(task.done)
  const handleChecked = async ()=>{
    const id = task._id
    TasksService.updateTask(id, {
      done: !checked,
    })
    setChecked(!checked)
  }
  const handleDelete = ()=>{
    const  deleteData = async ()=>{
      const id = task._id
      await TasksService.deleteTask({id})
      getTasks()
    }
    deleteData()
  }
  return (
    <div className="Task">
      <input type="checkbox" className="Task_checkbox" checked={checked} onChange={handleChecked}></input>
      <div className="Task_content">{task.toDo}</div>
      <button type="button" className="Task_deleteButton" onClick={handleDelete}>Delete</button>
    </div>
  )
}
