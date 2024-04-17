import { FC } from 'react';

interface CounterItemProps {
  label: string;
  count: number;
}

export const CounterItem: FC<CounterItemProps> = ({
  label,
  count,
}): JSX.Element => {
  const getTextColorClass = (label: string): string => {
    switch (label) {
      case 'Completed':
        return 'text-red-500';
      case 'Uncompleted':
        return 'text-green-500';
      default:
        return 'text-gray-600';
    }
  };

  const textColorClass = getTextColorClass(label);

  return (
    <p className={`text-sm font-bold ${textColorClass}`}>
      {label}: {count}
    </p>
  );
};
