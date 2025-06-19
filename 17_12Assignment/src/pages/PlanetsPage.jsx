import { useEffect, useState } from 'react';
import { getPlanets } from '../services/SpaceTravelApi';
import styles from './PlanetsPage.module.css';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const loadPlanets = async () => {
  //     const res = await getPlanets();
  //     if (res.isError) {
  //       setError(res.data);
  //     } else {
  //       setPlanets(res.data);
  //     }
  //   };

  //   loadPlanets();
  // }, []);

  useEffect(() => {
  const loadPlanets = async () => {
    const res = await getPlanets();
    if (res.isError) {
      setError(res.data);
    } else if (Array.isArray(res.data)) {
      setPlanets(res.data); // ✅ only set if data is an array
    } else {
      setError("Unexpected API response: planets is not an array");
    }
  };

  loadPlanets();
}, []);

  if (error) return <p>Error loading planets: {error.message || String(error)}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planets</h1>
      {Array.isArray(planets) &&
  planets.map((planet) => (
        <div key={planet.id} className={styles.planetCard}>
          <h3>{planet.name}</h3>
          <p>Population: {planet.currentPopulation}</p>
          {planet.pictureUrl && (
            <img
              src={planet.pictureUrl}
              alt={planet.name}
              style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlanetsPage;