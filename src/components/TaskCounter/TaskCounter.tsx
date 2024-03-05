import React from 'react'

import { CounterItem } from '../CounterItem/CounterItem'

interface TaskCounterProps {
  completedCount: number
  uncompletedCount: number
}

export const TaskCounter: React.FC<TaskCounterProps> = ({ completedCount, uncompletedCount }) => {
  return (
    <div className="mt-4">
      <CounterItem label="Completed" count={completedCount} />
      <CounterItem label="Uncompleted" count={uncompletedCount} />
    </div>
  )
}
