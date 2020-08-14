import React from 'react'
import tasks from '../mocks/tasks'
import Element from './Task'

export default function List() {
  return (
    tasks.map((task)=><Element task={task}></Element>)
  )
}
