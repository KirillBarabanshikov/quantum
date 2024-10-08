import { Link } from 'react-router-dom';

import { Search } from '@/features/search';
import AccountIcon from '@/shared/assets/icons/account_box.svg?react';
import BagIcon from '@/shared/assets/icons/bag.svg?react';
import GradeIcon from '@/shared/assets/icons/grade-fill.svg?react';
import Logo from '@/shared/assets/logos/logo_small.svg?react';

import { CatalogButton, HeaderLinks } from './ui';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <HeaderLinks />
            <header className={styles.header}>
                <div className={'container'}>
                    <div className={styles.headerContent}>
                        <Link to={'/'} className={styles.logo}>
                            <Logo />
                        </Link>
                        <div className={styles.searchWrap}>
                            <CatalogButton />
                            <Search />
                        </div>
                        <div className={styles.options}>
                            <div className={styles.option}>
                                <BagIcon />
                                <span className={styles.badge}>1</span>
                            </div>
                            <div className={styles.option}>
                                <GradeIcon />
                            </div>
                            <div className={styles.option}>
                                <AccountIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
