import { FC } from 'react';

interface NoTasksProps {
  text: string;
}

export const NoTasks: FC<NoTasksProps> = ({ text }) => {
  return (
    <p className=" mt-[30%] xt-center text-4xl font-extrabold text-fogWhite">
      {text}
    </p>
  );
};
