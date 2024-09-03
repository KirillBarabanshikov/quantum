import { FC, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

interface ILayoutProps {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ headerSlot, footerSlot }) => {
    return (
        <div className={styles.layout}>
            {headerSlot}
            <main>
                <Suspense fallback={<div>...loading</div>}>
                    <Outlet />
                </Suspense>
            </main>
            {footerSlot}
        </div>
    );
};
