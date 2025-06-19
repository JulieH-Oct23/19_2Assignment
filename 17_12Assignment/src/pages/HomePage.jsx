import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";


const HomePage = () => (
  <div className={styles.home}>
       <h1>Welcome to Your Space Travel Home</h1>
       <p>
        Command Spacecrafts to evacuate humanity from Earth and explore habitable planets.
       </p>
      <nav className={styles.nav}>
        <Link to="/spacecrafts" className={styles.link}>View All Spacecrafts</Link>
        <Link to="/spacecrafts/new" className={styles.link}>Build New Spacecraft</Link>
        <Link to="/planets" className={styles.link}>View Planets</Link>
      </nav>
  </div>
);

export default HomePage;


