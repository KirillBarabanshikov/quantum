import SearchIcon from '@/shared/assets/icons/search.svg?react';
import { Input } from '@/shared/ui';

import styles from './Search.module.scss';

export const Search = () => {
    return <Input placeholder={'Поиск'} suffixIcon={<SearchIcon />} className={styles.search} />;
};
