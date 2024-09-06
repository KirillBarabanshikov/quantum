import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { CategoryCard } from '@/entities/category';
import ArrowDownIcon from '@/shared/assets/icons/arrow_down.svg?react';
import UnionIcon from '@/shared/assets/icons/union.svg?react';
import { useOutsideClick } from '@/shared/hooks';
import { Button } from '@/shared/ui';

import styles from './CatalogButton.module.scss';

export const CatalogButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

    return (
        <div className={styles.catalogButtonWrap} ref={ref}>
            <Button theme={'white'} className={styles.catalogButton} onClick={() => setIsOpen((prev) => !prev)}>
                <UnionIcon />
                Каталог
                <ArrowDownIcon />
            </Button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.catalogMenu}
                    >
                        <Link to={'/'} className={styles.link}>
                            ВСЕ ТОВАРЫ
                        </Link>
                        <div className={styles.catalogList}>
                            {Array.from({ length: 8 }).map((_, index) => {
                                return <CategoryCard key={index} variant={'catalog'} />;
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
