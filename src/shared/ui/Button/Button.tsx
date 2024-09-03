import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline';
    theme?: 'blue' | 'white';
}

export const Button: FC<IButtonProps> = ({ variant = 'solid', theme = 'blue', className, children, ...props }) => {
    return (
        <button className={clsx(styles.button, styles[variant], styles[theme], className)} {...props}>
            {children}
        </button>
    );
};
