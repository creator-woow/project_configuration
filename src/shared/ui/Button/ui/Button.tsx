import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from 'shared/utils/classNames';
import cls from './Button.module.scss';
import { BackgroundColor, TextColor } from 'shared/lib/colors';

export enum ButtonView {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  FILLED = 'filled',
}

export enum ButtonSize {
  S = 's',
  M = 'm',
  L = 'l'
}

interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: ButtonView;
  size?: ButtonSize;
  backgroundColor?: BackgroundColor;
  color?: TextColor;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    view = ButtonView.CLEAR,
    size = ButtonSize.M,
    backgroundColor,
    color = TextColor.PRIMARY,
    onClick,
    ...otherProps
  } = props;

  const mods  = {
    [`bg-color-${backgroundColor}`]: backgroundColor
  };

  return (
    <button
      className={cn(
        cls.button,
        mods,
        [className, cls[`view-${view}`], cls[`size-${size}`], `text-color-${color}`])
      }
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
