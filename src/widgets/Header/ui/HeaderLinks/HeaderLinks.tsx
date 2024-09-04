import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './HeaderLinks.module.scss';

export const HeaderLinks = () => {
    return (
        <div className={styles.headerLinksWrap}>
            <nav>
                <ul className={styles.headerLinks}>
                    <li>
                        <Link to='/' className={styles.link}>
                            Сервисный центр
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className={styles.link}>
                            Доставка и оплата
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className={styles.link}>
                            Гарантии и возврат
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className={styles.link}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
            <a href='tel:+74957402530' className={clsx(styles.link, styles.tel)}>
                +7 (495) 740-25-30
            </a>
        </div>
    );
};
