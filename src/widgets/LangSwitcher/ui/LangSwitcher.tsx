import { FC, useCallback } from 'react'
import { cn } from 'shared/utils/classNames'
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }, [i18n])

  return (
    <Button
      className={cn('', {}, [className])}
      onClick={toggleLanguage}
    >
      {i18n.language.toUpperCase()}
    </Button>
  );
};
