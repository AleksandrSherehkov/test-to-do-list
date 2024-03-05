import  { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addTask, deleteTask, editTask, toggleTask } from '../../redux/task/tasksSlice'
import { TitlePage } from '../TitlePage/TitlePage'
import { TaskForm } from '../TaskForm/TaskForm'
import { TaskFilter } from '../TaskFilter/TaskFilter'
import { TaskList } from '../TaskList/TaskList'
import { TaskCounter } from '../TaskCounter/TaskCounter'
import {EditTaskModal} from '../EditTaskModal/EditTaskModal'



export const ToDoList = (): JSX.Element => {
  
  const [filter, setFilter] = useState('all') 

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState({ id: '', name: '' })
  


  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks.tasks)


  const handleAddTask = (taskName: string): void => {
    dispatch(addTask({ name: taskName }))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'current') return !task.completed
    return true 
  })

  

  const handleEdit = (id: string): void => {
    const taskToEdit = tasks.find((task) => task.id === id)
    if (taskToEdit) {
      setCurrentTask(taskToEdit)
      setIsEditModalOpen(true)
    }
  }

  const saveTask = (newName: string): void => {
    if (newName) {
      dispatch(editTask({ id: currentTask.id, name: newName }))
    }
  }

  const completedCount = tasks.filter(task => task.completed).length
  const uncompletedCount = tasks.filter(task => !task.completed).length

  return (
    <div className="h-screen mx-auto flex flex-col items-center  w-2/3 p-8 rounded-2xl bg-turquoise">
      <TitlePage title="To-Do List App" />
      <TaskForm onAddTask={handleAddTask} />
      <div className='w-full flex justify-between items-center mt-8'>
        <TaskCounter completedCount={completedCount} uncompletedCount={uncompletedCount} />
        <TaskFilter setFilter={setFilter} currentFilter={filter} />
      </div>
      {tasks.length === 0 ? <p className=' mt-[30%] xt-center text-4xl font-extrabold text-fogWhite'>No added tasks</p>: <TaskList
        tasks={filteredTasks}
        toggleTask={(id: string) => dispatch(toggleTask({ id }))}
        editTask={handleEdit}
        deleteTask={(id: string) => dispatch(deleteTask({ id }))}
      />}
      
      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskName={currentTask.name}
        onSave={saveTask}
      />
      
    </div>
  )
}