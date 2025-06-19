import { useEffect, useState } from 'react';
import { getPlanets } from '../services/SpaceTravelApi';
import styles from './PlanetsPage.module.css';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlanets = async () => {
      const res = await getPlanets();
      if (res.isError) {
        setError(res.data);
      } else {
        setPlanets(res.data);
      }
    };
    loadPlanets();
  }, []);

  if (error) return <p>Error loading planets: {error.message || String(error)}</p>;

  return (
    <div className={styles.container}>
      <h1>Planets</h1>
      {planets.length === 0 ? (
        <p>No planets found.</p>
      ) : (
        <div className={styles.grid}>
          {planets.map((planet) => (
            <div key={planet.id} className={styles.card}>
              <h2>{planet.name}</h2>
              <p>Population: {planet.currentPopulation.toLocaleString()}</p>
              {planet.pictureUrl && (
                <img
                  src={planet.pictureUrl}
                  alt={planet.name}
                  className={styles.image}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetsPage;