import { FC, Suspense } from 'react';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

export const RootPage: FC = () => {
  return (
    <>
      <NavBar />
      <div className='page-content-wrapper'>
        <Sidebar />
        <main className='page-content'>
          <Suspense fallback={<PageLoader/>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
