import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { router } from '@/router/router';

export function App() {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
}
