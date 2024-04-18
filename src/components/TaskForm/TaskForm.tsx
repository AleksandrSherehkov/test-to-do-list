import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { taskSchema } from '@/utils/taskSchema';

import { addTask } from '@/redux/task/tasksSlice';

export const TaskForm: FC = (): JSX.Element => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (taskName: string): void => {
    dispatch(addTask({ name: taskName }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const validationResult = taskSchema.safeParse(input);
    if (validationResult.success) {
      handleAddTask(input);
      setInput('');
      setError('');
    } else {
      setError(validationResult.error.errors[0].message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2  w-full  mt-6 md:mt-8 "
      >
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={e => {
            setInput(e.target.value);
            if (error) setError('');
          }}
          className="outline-none w-full md:w-4/5 border p-2 rounded-lg text-lg font-medium transition-all duration-300 hover:border-2 hover:border-gray-400"
        />
        <button
          type="submit"
          className="w-full md:w-1/5 border p-2 rounded-xl text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white transition-all duration-300 ease-in-out hover:from-blue-400 hover:to-blue-600"
        >
          Add task
        </button>
      </form>
      {error && <ErrorMessage error={error} />}
    </>
  );
};
