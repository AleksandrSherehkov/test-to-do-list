import { useState } from 'react'

import { taskSchema } from '../../utils/taskSchema'

interface TaskFormProps {
  onAddTask: (taskName: string) => void
}

export const TaskForm = ({ onAddTask }: TaskFormProps): JSX.Element => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const validationResult = taskSchema.safeParse(input)
    if (validationResult.success) {
      onAddTask(input)
      setInput('')
      setError('')
    } else {
      setError(validationResult.error.errors[0].message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2  w-full mt-8 ">
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (error) setError('')
          }}
          className="outline-none w-4/5 border p-2 rounded-lg text-lg font-medium transition-all duration-300 hover:border-2 hover:border-gray-400"
        />
        <button type="submit" className="w-1/5 border p-2 rounded-xl text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white transition-all duration-300 ease-in-out hover:from-blue-400 hover:to-blue-600">Add task</button>
      </form>
      {error && <div className="text-red-500 self-start ml-2">{error}</div>} 
    </>
  )
}