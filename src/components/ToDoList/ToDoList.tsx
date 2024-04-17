import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addTask,
  deleteTask,
  editTask,
  selectFilteredTasks,
  toggleTask,
} from '../../redux/task/tasksSlice';

import { TitlePage } from '../TitlePage/TitlePage';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskList } from '../TaskList/TaskList';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { EditTaskModal } from '../EditTaskModal/EditTaskModal';
import { NoTasks } from '../NoTasks/NoTasks';

export const ToDoList = (): JSX.Element => {
  const filteredTasks = useAppSelector(selectFilteredTasks);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: '', name: '' });

  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasks);

  const handleAddTask = (taskName: string): void => {
    dispatch(addTask({ name: taskName }));
  };

  const handleEdit = (id: string): void => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) {
      setCurrentTask(taskToEdit);
      setIsEditModalOpen(true);
    }
  };

  const saveTask = (newName: string): void => {
    if (newName) {
      dispatch(editTask({ id: currentTask.id, name: newName }));
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const uncompletedCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="h-screen mx-auto flex flex-col items-center  w-2/3 p-8 rounded-2xl bg-turquoise">
      <TitlePage title="To-Do List App" />
      <TaskForm onAddTask={handleAddTask} />
      <div className="w-full flex justify-between items-center mt-8">
        <TaskCounter
          completedCount={completedCount}
          uncompletedCount={uncompletedCount}
        />
        <TaskFilter />
      </div>
      {filteredTasks.length === 0 ? (
        <NoTasks text="No tasks" />
      ) : (
        <TaskList
          tasks={filteredTasks}
          toggleTask={(id: string) => dispatch(toggleTask({ id }))}
          editTask={handleEdit}
          deleteTask={(id: string) => dispatch(deleteTask({ id }))}
        />
      )}

      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskName={currentTask.name}
        onSave={saveTask}
      />
    </div>
  );
};
