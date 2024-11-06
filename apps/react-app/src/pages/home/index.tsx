import { useEffect, useState } from 'react';
import { Table } from '../../components/table';
import styles from './home.module.scss';

const url = 'https://672b72f21600dda5a9f51022.mockapi.io/users';

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error during the fetching:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['div']}>
        <h2>Home Page</h2>
        <p>Welcome Home</p>
      </div>
      <Table data={data} />
    </div>
  );
}
