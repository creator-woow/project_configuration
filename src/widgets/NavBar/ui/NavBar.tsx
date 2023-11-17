import { FC } from 'react';
import { cn } from 'shared/utils/classNames';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { className } = props;

  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      
    </nav>
  );
};
