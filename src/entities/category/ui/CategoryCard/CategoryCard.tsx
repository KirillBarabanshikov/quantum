import styles from './CategoryCard.module.scss';

export const CategoryCard = () => {
    return (
        <article className={styles.categoryCard}>
            <p className={styles.title}>Приемники</p>
            <img
                src={
                    'https://s3-alpha-sig.figma.com/img/3a0f/9dee/7f7f0335ea5125916b2470d756335613?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUvynwxDKPS248-daol6OWA~i~NHLnpA7PrQQkzevsMQP3waSFmDCy6kKpvahAudhrCb8OYe9TyOakex7E2meNUAtnzoUlRSfYq4ThmYkKjUFTmm00K7~Z630OZVhw-XNXtxyUiH2W5ZgqAFwWFSKgypvi0hqnlmQYvyHMt~B~YtyTDrTwocLJ1J8b5OVlERXBJ2TxVqIfT8v82LIaoUWD7xDXvHo~BRSonc~R3LGOurxMu32bft9Ij7QmxVmB~IBVq6RINmIChYs6Cn~l6MtxJQjYvqSRRYFNiiXxbs3ilDdVVD50Cu7tNM8vHsUGJOzvgq9q87qckXfwsGQxTpcw__'
                }
                alt='Приемники'
                className={styles.image}
            />
        </article>
    );
};
