
import { MdDeleteForever } from "react-icons/md"
import { BiSolidEditAlt } from "react-icons/bi"

interface TaskListItemProps {
  task: {
    id: string
    name: string
    completed: boolean
  }
  index: number
  toggleTask: (id: string) => void
  editTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task, toggleTask, editTask, deleteTask,index }) => {
  return (
    <li className='flex justify-between items-center p-4 rounded-xl bg-fogWhite w-full'>
      <span onClick={() => toggleTask(task.id)} className={`w-full cursor-pointer ${task.completed ? 'line-through text-red-500' : 'text-swamp'}`}>
        {index + 1}. {task.name}
      </span>
      <div className='flex gap-3'>
        <button onClick={() => editTask(task.id)} ><BiSolidEditAlt size={24} className="cursor-pointer fill-pastelGreen"/></button>
        <button onClick={() => deleteTask(task.id)}><MdDeleteForever size={24} className="cursor-pointer fill-azure" /></button>
      </div>
    </li>
  )
}
