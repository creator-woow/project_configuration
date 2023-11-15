import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('navigation.main-page')}
    </div>
  );
};

export default MainPage;
