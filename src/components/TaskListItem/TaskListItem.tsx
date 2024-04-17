import { motion } from 'framer-motion';
import { MdDeleteForever } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';

interface TaskListItemProps {
  task: {
    id: string;
    name: string;
    completed: boolean;
  };
  index: number;
  toggleTask: (id: string) => void;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({
  task,
  toggleTask,
  editTask,
  deleteTask,
  index,
}) => {
  const textVariants = {
    completed: {
      color: '#f50f3d',
      textDecorationLine: 'line-through',

      opacity: 0.5,
      transition: { duration: 0.5 },
    },
    uncompleted: {
      color: '#416337',
      textDecorationLine: 'none',

      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.li
      className="flex justify-between items-center p-4 rounded-xl bg-fogWhite w-full shadow-xl transition-all duration-200 ease-in-out transform hover:scale-[102%] hover:bg-slate-300"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <motion.button
        onClick={() => toggleTask(task.id)}
        className={`whitespace-pre-wrap text-left w-full cursor-pointer ${
          task.completed ? 'text-red-500' : 'text-swamp'
        }`}
        variants={textVariants}
        animate={task.completed ? 'completed' : 'uncompleted'}
      >
        {index + 1}. {task.name}
      </motion.button>
      <div className="flex gap-3">
        <button onClick={() => editTask(task.id)}>
          <BiSolidEditAlt
            size={24}
            className="cursor-pointer fill-pastelGreen hover:fill-greenBright"
          />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <MdDeleteForever
            size={24}
            className="cursor-pointer fill-azure hover:fill-redDark"
          />
        </button>
      </div>
    </motion.li>
  );
};
