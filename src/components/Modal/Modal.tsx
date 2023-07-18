import React from 'react';
import { formatClassnames } from '../Utilities/util';
import './Modal.css';

type ModalProps = {
  title: string;
  isVisible?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  const { title, isVisible, children, className } = props;

  return (
    <>
      {isVisible && (
        <div className={formatClassnames('modal', className)}>
          <div className="title">{title}</div>
          <div className="modalContent">{children ?? null}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
