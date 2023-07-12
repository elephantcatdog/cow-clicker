import React from 'react';
import { formatClassnames } from '../utilities/util';
import './Button.css';

type ButtonProps = {
    id: string;
    children: React.ReactNode;
    onClick?: () => void;
    height?: number;
    color?: string;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const {
        id,
        children,
        onClick,
        height = 25,
        color = "rgb(150, 150, 150)",
        className,
    } = props;

    return (
        <button id={props.id} className={formatClassnames("button", props.className)} style={{ height: props.height, backgroundColor: props.color }} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;