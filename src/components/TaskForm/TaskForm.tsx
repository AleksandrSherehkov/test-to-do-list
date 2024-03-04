import  { useState } from 'react'
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
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 w-full">
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (error) setError('')
          }}
          className="outline-none w-4/5 border p-2 rounded-lg"
        />
        <button type="submit" className="w-1/5 border p-2 rounded-xl">Add task</button>
      </form>
      {error && <div className="text-red-500">{error}</div>} 
    </>
  )
}