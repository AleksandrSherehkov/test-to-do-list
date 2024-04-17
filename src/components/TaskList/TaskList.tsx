import { AnimatePresence, motion } from 'framer-motion';

import { TaskListItem } from '../TaskListItem/TaskListItem';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectFilteredTasks } from '@/redux/task/taskSelectors';
import { deleteTask, openEditModal, toggleTask } from '@/redux/task/tasksSlice';
import { FC } from 'react';

export const TaskList: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filteredTasks = useAppSelector(selectFilteredTasks);

  const handleToggleTask = (id: string) => dispatch(toggleTask({ id }));
  const handleDeleteTask = (id: string) => dispatch(deleteTask({ id }));
  const handleEditTask = (id: string) => dispatch(openEditModal(id));

  return (
    <div className="flex flex-col it custom-scrollbar w-full pr-2">
      <AnimatePresence>
        <ul className="flex flex-col gap-y-3 w-full ">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              layout
            >
              <TaskListItem
                task={task}
                index={index}
                toggleTask={handleToggleTask}
                editTask={handleEditTask}
                deleteTask={handleDeleteTask}
              />
            </motion.div>
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
};
