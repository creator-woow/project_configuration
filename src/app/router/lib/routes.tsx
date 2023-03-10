import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RootPage } from 'pages/RootPage';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: 'main',
        element: <MainPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
];
