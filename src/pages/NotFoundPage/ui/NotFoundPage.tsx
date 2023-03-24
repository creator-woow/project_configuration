import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/utils/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(cls.notFoundPage)}>
      {t('error.page-not-found')}
    </div>
  );
};

export default NotFoundPage;
