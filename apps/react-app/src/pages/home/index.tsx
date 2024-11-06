import { useEffect, useState } from 'react';
import styles from './home.module.scss';
import { Loader } from '@/components/loader';
import { Table } from '@/components/table';

const url = 'https://672b72f21600dda5a9f51022.mockapi.io/users';

export function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error during the fetching:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <h2>Home Page</h2>
        <p>Welcome Home</p>
      </div>
      {isLoading ? <Loader /> : data && <Table data={data} />}
    </div>
  );
}
