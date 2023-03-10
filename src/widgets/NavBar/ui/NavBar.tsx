import { FC } from 'react'
import { Link, LinkView } from 'shared/ui/Link';
import { cn } from 'shared/utils/classNames'
import cls from './NavBar.module.scss'

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { className } = props;
  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      <Link to="/main" view={LinkView.OUTLINED}>
        Main
      </Link>
      <Link to="/about">
        About
      </Link>
    </nav>
  );
};
