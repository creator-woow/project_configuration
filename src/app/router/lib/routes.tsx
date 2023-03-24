import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RootPage } from 'pages/RootPage';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: 'main',
        element: <MainPage />,
        index: true
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
];
