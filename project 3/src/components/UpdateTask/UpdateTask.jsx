import './UpdateTask.css'
import { useTasks, useDispatchTasks } from '../../context/TaskContext'

function UpdateTask() {
    const tasks = useTasks()
    const dispatch = useDispatchTasks()

  return (
    <div className='update-task'>
        <ol className='all-task'>
            {tasks.map(task => (
                <li key={task.id} className='task-card' >
                    <b className='task-name' >{task.id + 1 + '. ' + task.name}</b>
                    <p className='task-status' >Status: {(task.status) ? 'Completed' : 'Pending'}</p>
                    <button 
                        className='update-btn'
                        onClick={() => {
                            dispatch({
                                type: 'update',
                                task: {
                                    ...task,
                                    status: !task.status
                                }
                            })
                        }}
                    >
                        Update Status
                    </button>
                    <button
                        className='remove-btn'
                        onClick={() => {
                            dispatch({
                                type: 'remove',
                                id: task.id
                            })
                        }}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default UpdateTask