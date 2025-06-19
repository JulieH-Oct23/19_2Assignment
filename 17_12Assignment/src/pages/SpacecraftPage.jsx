import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/LoadingSpinner.jsx';
import { getPlanets, getSpacecraftById, sendSpacecraftToPlanet } from '../services/SpaceTravelApi';
import styles from './Spacecraft.module.css';


const SpacecraftPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spacecraft, setSpacecraft] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [sendError, setSendError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const scRes = await getSpacecraftById(id);
      const planetsRes = await getPlanets();
      if (scRes.isError) setError(scRes.data);
      else setSpacecraft(scRes.data);
      if (!planetsRes.isError) setPlanets(planetsRes.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleSend = async () => {
    if (!selectedPlanet) return setSendError('Please select a destination planet');
    if (parseInt(selectedPlanet) === spacecraft.currentLocation) {
      return setSendError('Destination planet must be different from current location');
    }
    setSending(true);
    const res = await sendSpacecraftToPlanet(spacecraft.id, parseInt(selectedPlanet));
    setSending(false);
    if (res.isError) setSendError(res.data);
    else {
      alert('Spacecraft sent successfully!');
      navigate('/spacecrafts');
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className={styles.error}>Error loading spacecraft: {error}</p>;
  if (!spacecraft) return null;

  return (
    <div className={styles.container}>

      <h1>{spacecraft.name}</h1>
      <p><strong>Capacity:</strong> {spacecraft.capacity}</p>
      <p>{spacecraft.description}</p>
      {spacecraft.pictureUrl && spacecraft.pictureUrl.length > 0 && (
        <img src={spacecraft.pictureUrl[0]} alt={spacecraft.name} className={styles.image} />
      )}
      <p><strong>Current Location:</strong> {planets.find(p => p.id === spacecraft.currentLocation)?.name || 'Unknown'}</p>

      <h3>Send to another planet</h3>
      <select
        value={selectedPlanet}
        onChange={(e) => {
          setSelectedPlanet(e.target.value);
          setSendError(null);
        }}
      >
        <option value="">Select planet</option>
        {planets
          .filter(p => p.id !== spacecraft.currentLocation)
          .map(p => (
            <option key={p.id} value={p.id}>
              {p.name} (Population: {p.currentPopulation})
            </option>
          ))}
      </select>
      <button onClick={handleSend} disabled={sending}>
        {sending ? 'Sending...' : 'Send Spacecraft'}
      </button>
      {sendError && <p className={styles.error}>{sendError}</p>}

      <Link to="/spacecrafts" className={styles.backLink}>Back to Spacecrafts</Link>
    </div>
  );
};

export default SpacecraftPage;