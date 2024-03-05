import  { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addTask, deleteTask, editTask, toggleTask } from '../../redux/task/tasksSlice'
import { TitlePage } from '../TitlePage/TitlePage'
import { TaskForm } from '../TaskForm/TaskForm'
import { TaskFilter } from '../TaskFilter/TaskFilter'
import { TaskList } from '../TaskList/TaskList'
import { TaskCounter } from '../TaskCounter/TaskCounter'



export const ToDoList = (): JSX.Element => {
  
  const [filter, setFilter] = useState('all') 
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
    const newName = prompt('Редактировать задачу:')
    if (newName) {
      dispatch(editTask({ id, name: newName }))
    }
  }

  const completedCount = tasks.filter(task => task.completed).length
  const uncompletedCount = tasks.filter(task => !task.completed).length

  return (
    <div className="mx-auto flex flex-col items-center  w-2/3 p-8 rounded-2xl bg-turquoise">
      <TitlePage title="To-Do List App" />
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter setFilter={setFilter} currentFilter={filter} />
      <TaskList
        tasks={filteredTasks}
        toggleTask={(id: string) => dispatch(toggleTask({ id }))}
        editTask={handleEdit}
        deleteTask={(id: string) => dispatch(deleteTask({ id }))}
      />
      <TaskCounter completedCount={completedCount} uncompletedCount={uncompletedCount} />
    </div>
  )
}