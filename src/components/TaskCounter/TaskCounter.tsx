import React from 'react'

interface TaskCounterProps {
  completedCount: number
  uncompletedCount: number
}

export const TaskCounter: React.FC<TaskCounterProps> = ({ completedCount, uncompletedCount }) => {
  return (
    <div className="mt-4">
      <p>Completed: {completedCount}</p>
      <p>Uncompleted: {uncompletedCount}</p>
    </div>
  )
}
