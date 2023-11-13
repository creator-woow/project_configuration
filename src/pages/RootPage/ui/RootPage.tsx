import { FC, Suspense } from 'react';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader';

export const RootPage: FC = () => {
  return (
    <>
      <NavBar />
      <div className='page-content-wrapper'>
        <Sidebar />
        <main className='page-content'>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};
