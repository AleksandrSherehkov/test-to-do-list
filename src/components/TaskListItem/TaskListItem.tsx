
import { MdDeleteForever } from "react-icons/md"
import { BiSolidEditAlt } from "react-icons/bi"

interface TaskListItemProps {
  task: {
    id: string
    name: string
    completed: boolean
  }
  toggleTask: (id: string) => void
  editTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task, toggleTask, editTask, deleteTask }) => {
  return (
    <li className='flex justify-between items-center p-4 rounded-xl bg-[#EDF6F5]'>
      <span onClick={() => toggleTask(task.id)} className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}>
        {task.name}
      </span>
      <div className='flex gap-3'>
        <button onClick={() => editTask(task.id)} ><BiSolidEditAlt size={24}/></button>
        <button onClick={() => deleteTask(task.id)}><MdDeleteForever size={24} /></button>
      </div>
    </li>
  )
}
