// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { router } from '../router/Router';

export function App() {
  return (
    <div className={styles['container']}>
      <RouterProvider router={router} />
    </div>
  );
}
