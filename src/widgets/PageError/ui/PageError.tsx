import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const PageError = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('pageError.message')}
      <Button>
        {t('pageError.reloadButton')}
      </Button>
    </div>
  );
};
