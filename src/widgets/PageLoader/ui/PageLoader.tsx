import { FC } from 'react';
import { cn } from 'shared/utils/classNames';
import { Loader } from 'shared/ui/Loader';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const { className } = props;
  return (
    <Loader />
  );
};
