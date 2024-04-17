import { useEffect, useState } from 'react';

import { taskSchema } from '../../utils/taskSchema';
import { Modal } from '../Modal/Modal';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeEditModal, editTask } from '@/redux/task/tasksSlice';
import { selectCurrentTaskForEditing } from '@/redux/task/taskSelectors';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const EditTaskModal = () => {
  const dispatch = useAppDispatch();

  const { editModalOpen } = useAppSelector(state => state.tasks);
  const currentTask = useAppSelector(selectCurrentTaskForEditing);
  const [newName, setNewName] = useState(currentTask?.name ?? '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentTask) {
      setNewName(currentTask?.name);
    }
  }, [currentTask]);

  const handleCloseModal = () => {
    dispatch(closeEditModal());
  };

  const handleSave = (): void => {
    if (newName && currentTask) {
      const validationResult = taskSchema.safeParse(newName);
      if (validationResult.success) {
        dispatch(editTask({ id: currentTask.id, name: newName }));
        setNewName('');
        setError('');
        handleCloseModal();
      } else {
        setError(validationResult.error.errors[0].message);
      }
    } else {
      setError('No task selected or name is empty.');
    }
  };

  return (
    <Modal isOpen={editModalOpen} onClose={handleCloseModal}>
      <div className="flex flex-col gap-y-2">
        <input
          type="text"
          value={newName}
          onChange={e => {
            setNewName(e.target.value);
            if (error) setError('');
          }}
          className="outline-none w-full border p-2 rounded-lg text-lg font-medium transition-all duration-300 hover:border-2 hover:border-gray-400"
        />
        {error && <ErrorMessage error={error} />}
        <button
          onClick={handleSave}
          className="mx-auto w-1/5 border p-2 rounded-xl text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white transition-all duration-300 ease-in-out hover:from-blue-400 hover:to-blue-600"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};
