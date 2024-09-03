import { Layout } from '@/shared/ui';
import { Header } from '@/widgets';

export const BaseLayout = () => {
    return <Layout headerSlot={<Header />} footerSlot={<div>foot</div>} />;
};
