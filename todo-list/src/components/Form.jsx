import React from 'react'
import './Form.css'
const handleSubmit = (e) => {
  e.preventDefault()
  const input = document.getElementById('task')
  console.log(input.value)
}

export default function Form() {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Add task" className="Form_input" id="task"></input>
      <button className="Form_add" type="submit">Add todo</button>
    </form>
  )
}
