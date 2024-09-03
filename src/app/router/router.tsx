import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from '../layout/BaseLayout.tsx';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage.tsx'));

export const router = createBrowserRouter([
    { element: <BaseLayout />, children: [{ path: '/', element: <MainPage /> }] },
]);
