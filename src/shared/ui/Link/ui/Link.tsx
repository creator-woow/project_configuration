import { FC, PropsWithChildren } from 'react'
import { Link as RouterDomLink, LinkProps as IRouterDomLinkProps } from 'react-router-dom';
import { cn } from 'shared/utils/classNames'
import cls from './Link.module.scss'

export enum LinkView {
  OUTLINED = 'outlined',
  DEFAULT = 'default',
}

interface ILinkProps extends IRouterDomLinkProps, PropsWithChildren {
  className?: string;
  view?: LinkView;
}

export const Link: FC<ILinkProps> = (props) => {
  const {
    className,
    children,
    to,
    view = LinkView.DEFAULT,
    ...otherProps
  } = props;
  return (
    <RouterDomLink
      to={to}
      className={cn(cls.link, {}, [className, cls[`view-${view}`]])}
      {...otherProps}
    >
      {children}
    </RouterDomLink>
  );
};
