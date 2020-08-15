export default class TasksService {
  static async getTasks(){
    const result = await fetch('http://localhost:3001/api/task')
    const tasks = await result.json()
    return tasks.data
  }
  static async getTask({id}){
    const result = await fetch(`http://localhost:3001/api/task/${id}`)
    const task = await result.json()
    return task.data
  }
  static async createTask(task){
    const result = await fetch(`http://localhost:3001/api/task/`,{
      method:'POST',
      body: JSON.stringify(task),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const taskId = await result.json()
    return taskId
  }
  static async deleteTask({id}) {
    const result = await fetch(`http://localhost:3001/api/task/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const deletedId = await result.json().data
    return deletedId
  }
  static async updateTask(id, data) {
    console.log('updateTask')
    try {
      const results = await fetch(`http://localhost:3001/api/task/${id}`,{
        method:'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      console.log('updateTask -> results', results)
      const taskId = await results.json()
      console.log('taskId', taskId)
      return taskId
    } catch (error) {
      console.log(error)
    }
  }
}

