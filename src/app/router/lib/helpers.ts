import { RouteObject } from 'react-router-dom';
import { routes } from './routes';

export function getAppRoutes(): RouteObject[] {
  return Object.values(routes);
}
