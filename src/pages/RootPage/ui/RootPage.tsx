import { FC } from 'react'
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';

export const RootPage: FC = () => {
  return (
    <>
      <NavBar />
      <div className='page-content-wrapper'>
        <Sidebar />
        <main className='page-content'>
          <Outlet />
        </main>
      </div>
    </>
  );
};
