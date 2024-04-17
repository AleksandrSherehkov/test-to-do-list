import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addTask,
  deleteTask,
  openEditModal,
  toggleTask,
} from '../../redux/task/tasksSlice';

import { TitlePage } from '../TitlePage/TitlePage';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskList } from '../TaskList/TaskList';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { EditTaskModal } from '../EditTaskModal/EditTaskModal';
import { NoTasks } from '../NoTasks/NoTasks';
import { selectFilteredTasks } from '@/redux/task/taskSelectors';

export const ToDoList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const filteredTasks = useAppSelector(selectFilteredTasks);

  const handleAddTask = (taskName: string): void => {
    dispatch(addTask({ name: taskName }));
  };

  const handleEdit = (id: string): void => {
    dispatch(openEditModal(id));
  };

  return (
    <div className="h-screen mx-auto flex flex-col items-center  w-2/3 p-8 rounded-2xl bg-turquoise">
      <TitlePage title="To-Do List App" />
      <TaskForm onAddTask={handleAddTask} />
      <div className="w-full flex justify-between items-center mt-8">
        <TaskCounter />
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

      <EditTaskModal />
    </div>
  );
};
