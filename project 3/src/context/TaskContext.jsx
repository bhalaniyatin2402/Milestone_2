import { createContext, useContext, useReducer } from "react";
import taskReducer from "../taskReducer";

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    )

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks() {
    return useContext(TasksContext)
}

export function useDispatchTasks() {
    return useContext(TasksDispatchContext)
}

const initialTasks = [
    { id: 0, name: 'Learn useRef', status: false },
    { id: 1, name: 'Go to Gym', status: false },
    { id: 2, name: 'Build todo web app', status: true }
]
  
