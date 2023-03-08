import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteObject } from 'react-router-dom';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routes: Record<AppRoute, RouteObject> = {
  [AppRoute.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  }
};