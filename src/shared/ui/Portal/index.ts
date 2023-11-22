import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {
  container?: Element;
}

export const Portal: FC<IPortalProps> = (props) => {
  const {
    children,
    container = document.body
  } = props;

  return createPortal(children, container);
};
