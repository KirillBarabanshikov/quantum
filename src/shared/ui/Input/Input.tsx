import { FC, InputHTMLAttributes, ReactNode, useId } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    suffixIcon?: ReactNode;
}

export const Input: FC<IInputProps> = ({ label, hint, suffixIcon, className, ...props }) => {
    const id = useId();

    return (
        <div className={styles.inputWrap}>
            {label && (
                <div className={styles.labelWrap}>
                    <label htmlFor={id} className={styles.label}>
                        {label}
                    </label>
                    {hint && <span className={styles.hint}>{hint}</span>}
                </div>
            )}
            <div className={clsx(styles.input, className)}>
                <input type='text' id={id} {...props} />
                {suffixIcon && <div className={styles.icon}>{suffixIcon}</div>}
            </div>
        </div>
    );
};
