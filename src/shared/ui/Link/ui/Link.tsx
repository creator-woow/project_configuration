import { FC, PropsWithChildren } from 'react';
import { Link as RouterDomLink, LinkProps as IRouterDomLinkProps } from 'react-router-dom';
import { cn } from 'shared/utils/classNames';
import cls from './Link.module.scss';
import { TextColor } from 'shared/lib/colors';

export enum LinkView {
  DEFAULT = 'default',
}

interface ILinkProps extends IRouterDomLinkProps, PropsWithChildren {
  className?: string;
  view?: LinkView;
  textColor?: TextColor;
}

export const Link: FC<ILinkProps> = (props) => {
  const {
    className,
    children,
    to,
    textColor = TextColor.PRIMARY,
    view = LinkView.DEFAULT,
    ...otherProps
  } = props;

  return (
    <RouterDomLink
      to={to}
      className={cn(cls.link, {}, [className, cls[`view-${view}`], `text-color-${textColor}`])}
      {...otherProps}
    >
      {children}
    </RouterDomLink>
  );
};
