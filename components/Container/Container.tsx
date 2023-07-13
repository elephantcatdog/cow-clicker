import React from 'react';
import { formatClassnames } from '../utilities/util';
import './Container.css';

type ContainerProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  height?: number;
  color?: string;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  const {
    id,
    title,
    children,
    height = 200,
    color = 'rgb(150, 150, 150)',
    className,
  } = props;

  return (
    <div
      id={id}
      className={formatClassnames('container', className)}
      style={{
        height: height,
        backgroundColor: color,
      }}
    >
      <span className="title">{title}</span>
      {children}
    </div>
  );
};

export default Container;
