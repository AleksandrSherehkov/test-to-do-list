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
    <ul className='flex flex-col gap-y-3'>
      {tasks.map(task => 
        <TaskListItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}
    </ul>
  )
}
