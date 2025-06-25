import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";


const HomePage = () => (
  <div className={styles.home}>
       <h1>Welcome to Your Space Travel Home</h1>
       <p>
        Command Spacecrafts to evacuate humanity from Earth and explore habitable planets.
       </p>
       <p>
        Once the cradle of humanity, Earth had become a shadow of its former self due to centuries of neglect and environmental degradation. As a result, the focus of humankind had shifted beyond Earth's boundaries, and the key to their interplanetary exploration lay in a cutting-edge web application called "Space Travel."
       </p>
       <p>
        The web application's users are commanders who will use it to evacuate humankind from the Earth. The web application is planned to empower users to list all spacecraft, view the details of a spacecraft, build a new one, and destroy the old one. But the capabilities of it continue beyond there. It is planned to enable users to view planets with the spacecraft on it and send spacecraft from one planet to another to transfer people.
       </p>
      <nav className={styles.nav}>
        <Link to="/spacecrafts" className={styles.link}>View All Spacecrafts</Link>
        <Link to="/spacecrafts/new" className={styles.link}>Build New Spacecraft</Link>
        <Link to="/planets" className={styles.link}>View Planets</Link>
      </nav>
  </div>
);

export default HomePage;


