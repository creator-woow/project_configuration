import { FC, useCallback } from 'react'
import { cn } from 'shared/utils/classNames'
import { Button } from 'shared/ui/Button';
import { useTheme } from 'shared/hooks/useTheme';
import { Theme } from 'shared/context/ThemeContext';
import cls from './ThemeChanger.module.scss'
import LightIcon from 'shared/assets/icons/icon-theme-light.svg';
import DarkIcon from 'shared/assets/icons/icon-theme-dark.svg';

interface IThemeChangerProps {
  className?: string;
}

export const ThemeChanger: FC<IThemeChangerProps> = (props) => {
  const { className } = props;
  const [theme, setTheme] = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL);
  }, [theme]);

  return (
    <Button
      className={cn(cls.changer, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.NORMAL ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
