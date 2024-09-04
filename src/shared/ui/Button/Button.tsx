import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline';
    theme?: 'blue' | 'white';
    fullWidth?: boolean;
}

export const Button: FC<IButtonProps> = ({
    variant = 'solid',
    theme = 'blue',
    fullWidth = false,
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={clsx(styles.button, styles[variant], styles[theme], fullWidth && styles.fullWidth, className)}
            {...props}
        >
            {children}
        </button>
    );
};
