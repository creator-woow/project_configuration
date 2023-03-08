import { FC, useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getAppRoutes } from '../lib/helpers';

export const AppRouter: FC = () => {

  const router = useMemo(() => {
    return createBrowserRouter(getAppRoutes());
  }, [])

  return (
    <RouterProvider router={router} />
  );
};
