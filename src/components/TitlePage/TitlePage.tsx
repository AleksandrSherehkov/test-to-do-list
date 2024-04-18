import { FC } from 'react';

interface TitlePageProps {
  title: string;
}

export const TitlePage: FC<TitlePageProps> = ({ title }): JSX.Element => {
  return <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>;
};
