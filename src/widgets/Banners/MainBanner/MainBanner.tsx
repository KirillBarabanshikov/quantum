import { FC } from 'react';
import clsx from 'clsx';

import { Button } from '@/shared/ui';

import styles from './MainBanner.module.scss';

interface IMainBannerProps {
    className?: string;
}

export const MainBanner: FC<IMainBannerProps> = ({ className }) => {
    return (
        <section className={clsx(styles.mainBanner, className)}>
            <div className={'container'}>
                <div className={styles.mainBannerContainer}>
                    <h1 className={styles.title}>Техника нового поколения</h1>
                    <p className={styles.description}>
                        На нашем сайте представлена продукция разных брендов
                        <br />
                        для бизнеса и частных лиц. Мы предлагаем только официально
                        <br />
                        ввезенное оборудование и решения на его базе.
                    </p>
                    <Button variant={'outline'} theme={'white'} className={styles.button}>
                        Каталог
                    </Button>
                </div>
            </div>
        </section>
    );
};
