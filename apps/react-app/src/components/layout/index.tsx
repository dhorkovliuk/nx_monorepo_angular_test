import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
