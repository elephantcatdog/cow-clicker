import React from 'react';
import { formatClassnames } from '../Utilities/util';
import './Button.css';

type ButtonProps = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  color?: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { id, children, onClick, color = null, className } = props;

  return (
    <button
      id={id ?? null}
      className={formatClassnames('button', className)}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {children ?? null}
    </button>
  );
};

export default Button;
