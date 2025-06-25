import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import NavigateBackButton from '../components/NavigateBackButton';
import { destroySpacecraftById, getSpacecrafts } from '../services/SpaceTravelApi';
import styles from './Spacecraft.module.css';

const SpacecraftsPage = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSpacecrafts = async () => {
    setLoading(true);
    const res = await getSpacecrafts();
    if (res.isError) setError(res.data);
    else setSpacecrafts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSpacecrafts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to destroy this spacecraft?')) {
      const res = await destroySpacecraftById(id);
      if (res.isError) alert(`Failed to destroy spacecraft: ${res.data}`);
      else fetchSpacecrafts();
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>All Spacecrafts</h1>
      <Link to="/spacecrafts/new" className={styles.buildLink}>Build New Spacecraft</Link>
      {spacecrafts.length === 0 ? (
        <p>No spacecrafts available.</p>
      ) : (
        <ul className={styles.list}>
          {spacecrafts.map((sc) => (
            <li key={sc.id} className={styles.card}>
              <h1>{sc.name}</h1>
              <br />
              <p>Capacity: {sc.capacity}</p>
              <br />
              <p>Description: {sc.description}</p>
              <br />
              <Link to={`/spacecraft/${sc.id}`} className={styles.detailLink}>View Details</Link><br />
              <button className={styles.deleteBtn} onClick={() => handleDelete(sc.id)}>Destroy</button>
            </li>
          ))}
        </ul>
      )}
      <NavigateBackButton />
    </div>
  );
};

export default SpacecraftsPage;