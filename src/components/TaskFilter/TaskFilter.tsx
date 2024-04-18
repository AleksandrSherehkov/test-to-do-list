import { ChangeEvent, FC } from 'react';

import { TASK_FILTERS } from '../../constants/filter';
import { getLabelClass } from '../../utils/tailwindClasses';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setFilter } from '@/redux/task/tasksSlice';

export const TaskFilter: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(state => state.tasks.filter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form className="flex flex-col   md:flex-row  gap-1 md:gap-3  place-self-end">
      {TASK_FILTERS.map(filter => (
        <label
          key={filter.value}
          className={`${getLabelClass(
            filter.value
          )} text-sm md:text-lg font-bold `}
        >
          <input
            type="radio"
            name="taskFilter"
            value={filter.value}
            onChange={handleFilterChange}
            checked={currentFilter === filter.value}
            className="mr-2"
          />
          {filter.label}
        </label>
      ))}
    </form>
  );
};
