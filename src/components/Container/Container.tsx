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
  isVisible?: boolean;
};

export const Container = (props: ContainerProps) => {
  const {
    id,
    title,
    children,
    height = 200,
    color = 'rgb(150, 150, 150)',
    className,
    isVisible = true,
  } = props;

  return (
    <>
      {isVisible ? (
        <div
          id={id}
          className={formatClassnames('container', className)}
          style={{
            height: height,
            backgroundColor: color,
          }}
        >
          <div className="title">{title}</div>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Container;
