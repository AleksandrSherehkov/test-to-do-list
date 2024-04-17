import { FC } from 'react';
interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }): JSX.Element => {
  return <div className="text-red-500 self-start ml-2">{error}</div>;
};
