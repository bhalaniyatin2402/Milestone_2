import AddTask from "./components/AddTask/AddTask"
import UpdateTask from "./components/UpdateTask/UpdateTask"
import TasksProvider, { useTasks } from "./context/TaskContext"

function App() {  

  return (
      <TasksProvider>
          <TasksProviderCover />
      </TasksProvider>
  )
}

function TasksProviderCover() {
  const tasks = useTasks()

  return(
    <>
      <AddTask />
        {(tasks.length === 0)
          ? <p className="empty-msg">There is no task. please add task!</p>
          : <UpdateTask />
        }
    </>
  )
}

export default App

