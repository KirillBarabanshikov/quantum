import image from './image.png';

import styles from './CategoryCard.module.scss';

export const CategoryCard = () => {
    return (
        <article className={styles.categoryCard}>
            <p className={styles.title}>Приемники</p>
            <img src={image} alt='Приемники' className={styles.image} />
        </article>
    );
};
