import React, { useEffect } from 'react'
import './Form.css'
import TasksService from '../services/tasks'

const handleSubmit = (e,getTasks) => {
  e.preventDefault()
  const input = document.getElementById('task')
  const fetchData = async ()=>{
    await TasksService.createTask({
      toDo: input.value,
      done: false,
    })
    getTasks()
  }
  fetchData()
}

export default function Form({getTasks}) {
  return (
    <form className="Form" onSubmit={(e)=>{handleSubmit(e,getTasks)}}>
      <input type="text" name="task" placeholder="Add task" className="Form_input" id="task"></input>
      <button className="Form_add" type="submit">Add todo</button>
    </form>
  )
}
