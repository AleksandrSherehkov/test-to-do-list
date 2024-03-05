import { ChangeEvent, FC } from 'react'
import { taskFilters } from '../../constants/filter'
import { getLabelClass } from '../../utils/tailwindClasses'

interface TaskFilterProps  {
  setFilter: (filter: string) => void
  currentFilter: string
}

export const TaskFilter: FC<TaskFilterProps> = ({ setFilter, currentFilter }) => {
  

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value)
  }

  

  return (
    <form className="flex gap-3  place-self-end">
      {taskFilters.map((filter) => 
        <label key={filter.value} className={`${getLabelClass(filter.value)} text-lg font-bold`}>
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
