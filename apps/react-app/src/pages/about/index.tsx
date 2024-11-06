import styles from './about.module.scss';

export function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About Page</h2>
      <p>This is an about page</p>
    </div>
  );
}
