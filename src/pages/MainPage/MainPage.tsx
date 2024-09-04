import { CategoriesList, MainBanner, NewCollectionBanner, QuestionBanner } from '@/widgets';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <MainBanner className={styles.mainBanner} />
            <CategoriesList className={styles.categoriesList} />
            <NewCollectionBanner className={styles.newCollectionBanner} />
            <QuestionBanner />
        </div>
    );
};

export default MainPage;
