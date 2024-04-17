import React, { useEffect, useState } from 'react';

import { taskSchema } from '../../utils/taskSchema';

import Modal from '../Modal/Modal';

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
  onSave: (newName: string) => void;
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onClose,
  taskName,
  onSave,
}) => {
  const [newName, setNewName] = useState(taskName);
  const [error, setError] = useState('');

  useEffect(() => {
    setNewName(taskName);
  }, [taskName]);

  const handleSave = (): void => {
    const validationResult = taskSchema.safeParse(newName);
    if (validationResult.success) {
      onSave(newName);
      setNewName('');
      setError('');
      onClose();
    } else {
      setError(validationResult.error.errors[0].message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
        {error && <div className="text-red-500">{error}</div>}
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
