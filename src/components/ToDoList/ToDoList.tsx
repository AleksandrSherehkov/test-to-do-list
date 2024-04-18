import { FC } from 'react';

import { TitlePage } from '../TitlePage/TitlePage';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskList } from '../TaskList/TaskList';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { EditTaskModal } from '../EditTaskModal/EditTaskModal';
import { NoTasks } from '../NoTasks/NoTasks';

import { useAppSelector } from '@/redux/hooks';
import { selectFilteredTasks } from '@/redux/task/taskSelectors';

export const ToDoList: FC = (): JSX.Element => {
  const filteredTasks = useAppSelector(selectFilteredTasks);

  return (
    <div className="h-screen mx-auto flex flex-col items-center  w-2/3 p-8 rounded-2xl bg-turquoise">
      <TitlePage title="To-Do List App" />
      <TaskForm />
      <div className=" w-full flex flex-col md:flex-row justify-between items-center mt-8">
        <TaskCounter />
        <TaskFilter />
      </div>
      {filteredTasks.length === 0 ? <NoTasks text="No tasks" /> : <TaskList />}

      <EditTaskModal />
    </div>
  );
};
