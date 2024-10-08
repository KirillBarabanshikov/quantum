import styles from './Filters.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow_down2.svg?react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/shared/ui';

export const Filters = () => {
    return (
        <div className={styles.filters}>
            <div className={styles.filtersList}>
                {Array.from({ length: 5 }).map((_, index) => {
                    return <FilterItem key={index} list={index < 4} />;
                })}
            </div>
            <div className={styles.buttons}>
                <Button size={'md'}>Применить</Button>
                <Button variant={'outline'} size={'md'}>
                    Сбросить фильтры
                </Button>
            </div>
        </div>
    );
};

const FilterItem = ({ list }: { list: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.filterItem}>
            <div className={styles.filterHeader} onClick={() => setIsOpen((prev) => !prev)}>
                <span>Бренд</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ damping: 0 }}>
                    <ArrowIcon />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className={styles.filterBody}
                    >
                        <div className={styles.filterContent}>
                            {list ? (
                                <div className={styles.list}>
                                    <div className={styles.listItem}>
                                        <span>Бренд 1</span>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.inputsWrap}>
                                    <div className={styles.input}>
                                        <span>от</span>
                                        <input />
                                    </div>
                                    <div className={styles.input}>
                                        <span>до</span>
                                        <input />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
