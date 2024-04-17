import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const getTasks = (state: RootState) => state.tasks.tasks;
const getFilter = (state: RootState) => state.tasks.filter;

export const selectAllTasks = getTasks;

export const selectCompletedTaskCount = createSelector(
  [getTasks],
  tasks => tasks.filter(task => task.completed).length
);

export const selectUncompletedTaskCount = createSelector(
  [getTasks],
  tasks => tasks.filter(task => !task.completed).length
);

export const selectCurrentTaskForEditing = createSelector(
  [getTasks, (state: RootState) => state.tasks.currentTaskId],
  (tasks, currentTaskId) => tasks.find(task => task.id === currentTaskId)
);

export const selectFilteredTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'current':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }
);
