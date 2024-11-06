import { formatDate } from '../../utils/fromatDate';
import styles from './table.module.scss';

export function Table(props: any) {
  const { data } = props;
  if (!data) return;
  return (
    <div className={styles['tableContainer']}>
      <table className={styles['table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{formatDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
