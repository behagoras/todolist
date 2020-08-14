import React, { useState } from 'react'
import './Task.css'

export default function Element({task}) {
  const [checked,setChecked]=useState(task.done)
  const handleChecked = ()=>{
    setChecked(!checked)
  }
  console.log(task)
  return (
    <div className="Task">
      <input type="checkbox" className="Task_checkbox" checked={checked} onChange={handleChecked}></input>
      <div className="Task_content">{task.task}</div>
      <button type="button" className="Task_deleteButton">Delete</button>
    </div>
  )
}
