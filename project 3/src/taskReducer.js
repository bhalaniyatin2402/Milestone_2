function taskReducer(tasks, action) {
    if(action.type === 'add') {
        return [
            ...tasks, {
                id: action.id,
                name: action.text,
                status: 'Pending'
            }
        ]
    } else if(action.type === 'update') {
        return tasks.map(t => {
            if(t.id === action.task.id) {
                return action.task
            } else {
                return t
            }
        })
    } else if(action.type === 'remove') {
        return tasks.filter(t => t.id !== action.id)
    } else {
        throw new  Error('unknown task! : ', action.task)
    }
}

export default taskReducer
