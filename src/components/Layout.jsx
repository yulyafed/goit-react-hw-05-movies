import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Head, Nav } from 'components/Layout.styled';

let active = {
  color: '#2196f3',
};

export const Layout = () => {
  return (
    <div>
      <Head>
        <nav>
          <Nav
            to="/"
            style={({ isActive }) => (isActive ? active : undefined)} >
            Home
          </Nav>
          <Nav
            to="/movies"
            style={({ isActive }) => (isActive ? active : undefined)} >
            Movies
          </Nav>
        </nav>
      </Head>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
