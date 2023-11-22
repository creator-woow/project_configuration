import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/utils/classNames';
import { Button, ButtonView } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { TextColor } from 'shared/lib/colors';
import { Modal } from 'shared/ui/Modal';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const onToggleModal = useCallback(() => setAuthModalOpen((prev) => !prev), []);

  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      <Button
        className={cls.authBtn}
        color={TextColor.PRIMARY}
        view={ButtonView.CLEAR}
        onClick={onToggleModal}
      >
        {t('navbar.login')}
      </Button>
      <Modal isOpen={authModalOpen} onClose={onToggleModal}>
        {t('loremlorem')}
      </Modal>
    </nav>
  );
};
