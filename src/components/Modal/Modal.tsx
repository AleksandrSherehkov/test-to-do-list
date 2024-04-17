import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from 'react-icons/rx';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [modalContainer, setModalContainer] = useState<Element | null>(null);

  useEffect(() => {
    setModalContainer(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  if (!isOpen || !modalContainer) return null;

  return createPortal(
    <div
      onClick={onClose}
      className=" fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-1/2 bg-turquoise/80 px-10 pt-10 pb-5 rounded-md relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 ">
          <RxCross2
            size={20}
            className="cursor-pointer text-fogWhite hover:text-azure"
          />
        </button>
        {children}
      </div>
    </div>,
    modalContainer
  );
};
