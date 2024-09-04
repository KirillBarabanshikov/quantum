import { RouterProvider } from 'react-router-dom';

import 'swiper/css';

import { router } from './router/router.tsx';

import '@/shared/styles/index.css';

export const App = () => {
    return <RouterProvider router={router} />;
};
