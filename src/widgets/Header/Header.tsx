import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Search } from '@/features/search';
import Logo from '@/shared/assets/logos/logo_small.svg?react';

import { CatalogButton, HeaderLinks } from './ui';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx(styles.headerContainer, 'container')}>
                <HeaderLinks />
                <div className={styles.headerContent}>
                    <Link to={'/'} className={styles.logo}>
                        <Logo />
                    </Link>
                    <div className={styles.searchWrap}>
                        <CatalogButton />
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
};
