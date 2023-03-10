import { FC } from 'react'
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Outlet } from 'react-router-dom';

interface IRootPageProps {
  className?: string;
}

export const RootPage: FC<IRootPageProps> = (props) => {
  const { className } = props;
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
