import {
    Advantages,
    CategoriesList,
    MainBanner,
    NewCollectionBanner,
    ProductsCarousel,
    QuestionBanner,
} from '@/widgets';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <MainBanner className={styles.mainBanner} />
            <CategoriesList className={styles.categoriesList} />
            <ProductsCarousel title={'Новинки'} className={styles.new} />
            <ProductsCarousel title={'Популярное'} className={styles.popular} />
            <NewCollectionBanner className={styles.newCollectionBanner} />
            <ProductsCarousel title={'Аккумуляторы'} className={styles.accumulators} />
            <Advantages className={styles.advantages} />
            <QuestionBanner />
        </div>
    );
};

export default MainPage;
