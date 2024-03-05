import React from 'react'
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
      <ul className='flex flex-col gap-y-3 w-full px-2'>
        {tasks.map((task, index) => 
          <TaskListItem
            key={task.id}
            task={task}
            index={index}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        )}
      </ul>
    </div>
  )
}
