import ArrowDownIcon from '@/shared/assets/icons/arrow_down.svg?react';
import UnionIcon from '@/shared/assets/icons/union.svg?react';
import { Button } from '@/shared/ui';

import styles from './CatalogButton.module.scss';

export const CatalogButton = () => {
    return (
        <Button theme={'white'} className={styles.catalogButton}>
            <UnionIcon />
            Каталог
            <ArrowDownIcon />
        </Button>
    );
};
