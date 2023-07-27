import { useReducer } from "react"
import AddTask from "./AddTask/AddTask"
import UpdateTask from "./UpdateTask/UpdateTask"
import taskReducer from './taskReducer'

function App() {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  )

  function handleAddTask(text) {
    dispatch({
      type: 'add',
      id: tasks.length,
      text: text
    })
  }

  function handleUpdateTask(task) {
    dispatch({
      type: 'update',
      task: task
    })
  }

  function handleRemoveTask(taskId) {
    dispatch({
      type: 'remove',
      id: taskId
    })
  }

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      {(tasks.length === 0)
        ? <p className="empty-msg">There is no task. please add task!</p>
        : <UpdateTask
          tasks={tasks}
          onUpdateTask={handleUpdateTask}
          onRemoveTask={handleRemoveTask}
        />
      }
    </>
  )
}

export default App

const initialTasks = [
  { id: 0, name: 'Learn useRef', status: 'Pending' },
  { id: 1, name: 'Go to Gym', status: 'Pending' },
  { id: 2, name: 'Build todo web app', status: 'Completed' }
]