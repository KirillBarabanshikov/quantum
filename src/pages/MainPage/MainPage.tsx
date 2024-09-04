import { MainBanner, NewCollectionBanner } from '@/widgets';

import styles from './MainPage.module.scss';
import { QuestionBanner } from '@/widgets/Banners';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <MainBanner className={styles.mainBanner} />
            <NewCollectionBanner className={styles.newCollectionBanner} />
            <QuestionBanner />
        </div>
    );
};

export default MainPage;
