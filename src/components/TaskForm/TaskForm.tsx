import  { useState } from 'react'

interface TaskFormProps {
  onAddTask: (taskName: string) => void
}

export const TaskForm = ({ onAddTask }: TaskFormProps): JSX.Element => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (input.trim() && input.length <= 20) {
      onAddTask(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 w-full">
      <input
        type="text"
        placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-4/5 border p-2 rounded-lg"
      />
      <button type="submit" className="w-1/5 border p-2 rounded-xl">Add task</button>
    </form>
  )
}