import { useState } from 'react'
import './AddTask.css'

function AddTask({ onAddTask }) {
    const [ text, setText ] = useState('')

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
                    onAddTask(text)
                }}
            >
                Add
            </button>
        </div>
    )
}

export default AddTask
