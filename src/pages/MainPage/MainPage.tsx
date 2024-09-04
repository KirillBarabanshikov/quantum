import { MainBanner, NewCollectionBanner } from '@/widgets';

import styles from './MainPage.module.scss';
import { QuestionBanner } from '@/widgets/Banners';
import { CategoryCard } from '@/entities/category';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <CategoryCard />
            <MainBanner className={styles.mainBanner} />
            <NewCollectionBanner className={styles.newCollectionBanner} />
            <QuestionBanner />
        </div>
    );
};

export default MainPage;
