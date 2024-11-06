import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <Link to="/" className={styles['button']}>
        Home
      </Link>
      <Link to="/about" className={styles['button']}>
        About
      </Link>
      <Link to="/contact" className={styles['button']}>
        Contact
      </Link>
    </nav>
  );
}
