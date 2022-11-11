import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Head, Link } from 'components/Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Head>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies"> Movies</Link>
        </nav>
      </Head>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
