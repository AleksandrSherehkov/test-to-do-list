import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TasksState } from '../../utils/definitions';

const initialState: TasksState = {
  tasks: [],
  filter: 'current',
  editModalOpen: false,
  currentTaskId: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      const newTask = {
        id: Date.now().toString(),
        name: action.payload.name,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    editTask: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.name = action.payload.name;
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    openEditModal: (state, action: PayloadAction<string>) => {
      state.editModalOpen = true;
      state.currentTaskId = action.payload;
    },
    closeEditModal: state => {
      state.editModalOpen = false;
      state.currentTaskId = '';
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  setFilter,
  openEditModal,
  closeEditModal,
} = tasksSlice.actions;

export default tasksSlice.reducer;
