import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addTask, toggleTask } from '../../redux/task/tasksSlice'



export const ToDoList = (): JSX.Element => {
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all') 
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks.tasks)

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'current') return !task.completed
    return true 
  })

  const handleSubmit = (e: React.FormEvent):void => {
    e.preventDefault()
    if (input.trim() && input.length <= 20) { 
      dispatch(addTask({ name: input }))
      setInput('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="border p-2">Add task</button>
      </form>
      <div className="filters mb-4">
        <button onClick={() => setFilter('all')} className="border p-2">All</button>
        <button onClick={() => setFilter('completed')} className="border p-2">Сompleted</button>
        <button onClick={() => setFilter('current')} className="border p-2">Current</button>
      </div>
      <ul>
        {filteredTasks.map(task => 
          <li key={task.id} onClick={() => dispatch(toggleTask({ id: task.id }))} className={`cursor-pointer p-2 ${task.completed ? 'line-through' : ''}`}>
            {task.name}
          </li>
        )}
      </ul>
      <div className="mt-4">
        <p>Выполнено: {tasks.filter(task => task.completed).length}</p>
        <p>Осталось: {tasks.filter(task => !task.completed).length}</p>
      </div>
    </div>
  )
}