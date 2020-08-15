import React, { useEffect, useState } from 'react'
// import tasks from '../mocks/tasks'
import Element from './Task'

export default function List({tasks, getTasks}) {
  return (
    tasks.map((task)=>(
      <Element
        getTasks={getTasks}
        task={task}
      />
    ))
  )
}
