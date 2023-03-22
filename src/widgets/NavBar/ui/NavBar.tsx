import { FC } from 'react';
import { Link } from 'shared/ui/Link';
import { cn } from 'shared/utils/classNames';
import cls from './NavBar.module.scss';
import { useTranslation } from 'react-i18next';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      <Link to="/main">
        { t('navigation.main-page') }
      </Link>
      <Link to="/about">
        { t('navigation.about-page') }
      </Link>
    </nav>
  );
};
