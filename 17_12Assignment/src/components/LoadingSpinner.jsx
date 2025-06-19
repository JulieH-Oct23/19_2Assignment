import styles from "../App.module.css";

const LoadingSpinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinner} />
  </div>
);

export default LoadingSpinner;