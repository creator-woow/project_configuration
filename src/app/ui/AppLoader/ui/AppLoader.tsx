import { FC } from 'react';
import { Loader } from 'shared/ui/Loader';

interface IAppLoaderProps {
  className?: string;
}

export const AppLoader: FC<IAppLoaderProps> = (props) => {
  return (
    <Loader />
  );
};
