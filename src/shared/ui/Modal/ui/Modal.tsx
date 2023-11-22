import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { cn } from 'shared/utils/classNames';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'shared/hooks/useTheme';
import cls from './Modal.module.scss';


export const MODAL_TEST_ID = 'modal-test-id';
export const MODAL_OVERLAY_TEST_ID = 'modal-overlay-test-id';
export const MODAL_CONTENT_TEST_ID = 'modal-content-test-id';

interface IModalProps extends PropsWithChildren {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;
  const [theme] = useTheme();

  const onKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown);
      return () => window.removeEventListener('keydown', onKeydown);
    }
  }, [isOpen]);

  return isOpen ? (
    <Portal>
      <div
        data-testid={MODAL_TEST_ID}
        className={cn(cls.modal, {}, [className, theme])}
      >
        <div
          data-testid={MODAL_OVERLAY_TEST_ID}
          className={cls.overlay}
          onClick={onClose}
        >
          <div
            data-testid={MODAL_CONTENT_TEST_ID}
            className={cls.content}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};
