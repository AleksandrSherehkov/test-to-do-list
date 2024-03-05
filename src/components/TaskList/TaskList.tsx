
import { AnimatePresence, motion } from 'framer-motion'

import { TaskListItem } from '../TaskListItem/TaskListItem'
import { Task } from '../../utils/definitions'




interface TaskListProps {
  tasks: Task[]
  toggleTask: (id: string) => void
  editTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, editTask, deleteTask }) => {
  return (
    <div className='flex flex-col it custom-scrollbar w-full pr-2'>
      <AnimatePresence>
        <ul className='flex flex-col gap-y-3 w-full px-2'>
          {tasks.map((task, index) => 
            <motion.li
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
                toggleTask={toggleTask}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            </motion.li>
          )}
        </ul>
      </AnimatePresence>
    </div>
  )
}