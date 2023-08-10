import { useState } from 'react'
import './AddTask.css'
import { useTasks, useDispatchTasks } from '../../context/TaskContext'

function AddTask() {
    const [ text, setText ] = useState('')
    const dispatch = useDispatchTasks()
    const tasks = useTasks()

    return (
        <div className='task-add'>
            <input 
                value={text}
                placeholder='Enter Task Name'
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                className='add-btn'
                disabled={text.length === 0}
                onClick={() => {
                    setText('')
                    dispatch({
                        type: 'add',
                        id: tasks.length,
                        text: text
                    })
                }}
            >
                Add
            </button>
        </div>
    )
}

export default AddTask
