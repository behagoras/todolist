const express = require('express')
const app = express()
const { config } = require('./config/index')
const tasksApi = require('./routes/tasks.js')
app.use(express.json())
tasksApi(app)
app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`)
})
