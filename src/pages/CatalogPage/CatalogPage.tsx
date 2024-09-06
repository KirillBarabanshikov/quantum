import clsx from 'clsx';

import styles from './CatalogPage.module.scss';
import { FilterByCategory, Filters } from '@/features/catalog';

const CatalogPage = () => {
    return (
        <div className={styles.catalogPage}>
            <section>
                <div className={clsx(styles.titleContainer, 'container')}>
                    <h1 className={'title'}>Каталог</h1>
                </div>
                <FilterByCategory />
                <Filters />
            </section>
        </div>
    );
};

export default CatalogPage;
