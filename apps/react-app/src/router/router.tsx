import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { Layout } from '../components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
