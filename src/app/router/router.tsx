import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from '../layout/BaseLayout.tsx';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage.tsx'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage/CatalogPage.tsx'));

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            { path: '/', element: <MainPage /> },
            { path: '/catalog', element: <CatalogPage /> },
        ],
    },
]);
