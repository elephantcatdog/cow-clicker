import React from 'react';
import { formatClassnames } from '../Utilities/util';
import './Button.css';

type ButtonProps = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  height?: number;
  color?: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { id, children, onClick, height = 25, color = null, className } = props;

  return (
    <button
      id={id ?? null}
      className={formatClassnames('button', className)}
      style={{
        height: height,
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {children ?? null}
    </button>
  );
};

export default Button;
