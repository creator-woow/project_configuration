import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from 'shared/utils/classNames';
import cls from './Button.module.scss';

export enum ButtonView {
  CLEAR = 'clear',
  OUTLINED = 'outlined'
}

interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: ButtonView;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    view = ButtonView.CLEAR,
    onClick,
    ...otherProps
  } = props;
  return (
    <button
      className={cn(cls.button, {}, [className, cls[`view-${view}`]])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
