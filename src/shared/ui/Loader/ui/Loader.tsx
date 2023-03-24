import { FC } from 'react';
import { cn } from 'shared/utils/classNames';
import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={cn(cls.loader, {}, [className])}>
      <div className={cls.hourglass} />
    </div>
  );
};
