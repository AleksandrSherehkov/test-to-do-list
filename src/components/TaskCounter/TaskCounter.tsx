import { CounterItem } from '../CounterItem/CounterItem';

import { useAppSelector } from '@/redux/hooks';
import {
  selectCompletedTaskCount,
  selectUncompletedTaskCount,
} from '@/redux/task/taskSelectors';
import { FC } from 'react';

export const TaskCounter: FC = (): JSX.Element => {
  const completedCount = useAppSelector(selectCompletedTaskCount);
  const uncompletedCount = useAppSelector(selectUncompletedTaskCount);

  return (
    <div className="mt-4">
      <CounterItem label="Completed" count={completedCount} />
      <CounterItem label="Uncompleted" count={uncompletedCount} />
    </div>
  );
};
