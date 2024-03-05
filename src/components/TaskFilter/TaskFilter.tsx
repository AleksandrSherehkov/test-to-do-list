import { ChangeEvent, FC } from 'react'
import { taskFilters } from '../../constants/filter'

type TaskFilterProps = {
  setFilter: (filter: string) => void
  currentFilter: string
}

export const TaskFilter: FC<TaskFilterProps> = ({ setFilter, currentFilter }) => {
  

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value)
  }

  return (
    <form className="flex gap-2 mb-4">
      {taskFilters.map((filter) => 
        <label key={filter.value} >
          {filter.label}
          <input
            type="radio"
            name="taskFilter"
            value={filter.value}
            onChange={handleFilterChange}
            checked={currentFilter === filter.value}
            className="ml-2"
          />
        </label>
      )}
    </form>
  )
}
