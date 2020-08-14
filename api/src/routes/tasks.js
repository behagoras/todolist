const express = require('express')
const TasksService = require('../services/tasks')
const tasksService = new TasksService()

const router = express.Router()
function tasksApi (app) {
  app.use('/api/task', router)

  router.post('/', async (req, res, next) => {
    // create task
    const { body: task } = req
    try {
      const createdTaskId = await tasksService.createTask({ task })
      res.status(201).json({
        data: createdTaskId,
        message: 'task created'
      })
    } catch (error) {
      console.log(error)
    }
  })

  router.get('/', async (req, res, next) => {
    // Get tasks
    const { tags } = req.query
    try {
      const tasks = await tasksService.getTasks({ tags })
      res.status(200).json({
        data: tasks,
        message: 'tasks listed'
      })
    } catch (error) {
      console.log(error)
    }
  })

  router.get('/:taskId', async (req, res, next) => {
    // Get specific tag
    const { taskId } = req.params
    try {
      const tasks = await tasksService.getTask({ taskId })
      res.status(200).json({
        data: tasks,
        message: 'tasks listed'
      })
    } catch (error) {
      console.log(error)
    }
  })

  router.put('/:taskId', async (req, res, next) => {
    // Edit task
    const { taskId } = req.params
    const { body: task } = req

    console.log(task)
    try {
      const updatedTaskId = await tasksService.updateTask({ taskId, task })
      res.status(200).json({
        data: updatedTaskId,
        message: 'tasks updated'
      })
    } catch (error) {
      console.log(error)
    }
  })

  router.delete('/:taskId', async (req, res, next) => {
    // Delete task
    const { taskId } = req.params

    try {
      const deletedTaskId = await tasksService.deleteTask({ taskId })
      res.status(200).json({
        data: deletedTaskId,
        message: 'task deleted'
      })
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = tasksApi
