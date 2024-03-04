
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface Task {
  id: string
  name: string
  completed: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      const newTask = {
        id: Date.now().toString(),
        name: action.payload.name,
        completed: false,
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { addTask, toggleTask } = tasksSlice.actions

export default tasksSlice.reducer
