import { FC } from 'react';
import clsx from 'clsx';

import image from './image.png';

import styles from './CategoryCard.module.scss';

interface ICategoryCardProps {
    variant?: 'main' | 'catalog';
}

export const CategoryCard: FC<ICategoryCardProps> = ({ variant = 'main' }) => {
    return (
        <article className={clsx(styles.categoryCard, styles[variant])}>
            <p className={styles.title}>Приемники</p>
            <img src={image} alt='Приемники' className={styles.image} />
        </article>
    );
};
