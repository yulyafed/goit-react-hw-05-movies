import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar';
import { Content } from './Content';

export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Content />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
