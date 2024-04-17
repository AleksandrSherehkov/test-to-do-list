import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

export const SharedLayout: FC = (): JSX.Element => {
  return (
    <div className="container mx-auto bg-cyan-600 min-h-screen ">
      <Header />
      <main className="p-10">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
