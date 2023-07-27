import { useState } from 'react'
import './UpdateTask.css'

function UpdateTask({ tasks, onUpdateTask, onRemoveTask }) {
  return (
    <div className='update-task'>
        <ol className='all-task'>
            {tasks.map(task => (
                <li key={task.id} className='task-card' >
                    <b className='task-name' >{task.id + 1 + '. ' + task.name}</b>
                    <p className='task-status' >Status: {task.status}</p>
                    <button 
                        className='update-btn'
                        onClick={() => {
                            if(task.status === 'Pending') {
                                onUpdateTask({
                                    ...task,
                                    status: 'Completed'
                                })
                            }
                            else if(task.status === 'Completed') {
                                onUpdateTask({
                                    ...task,
                                    status: 'Pending'
                                })
                            }
                        }}
                    >
                        Update Status
                    </button>
                    <button
                        className='remove-btn'
                        onClick={() => {
                            onRemoveTask(task.id)
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