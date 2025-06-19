import styles from ".components/NavigateBackButton.module.css";
import { useNavigate } from "react-router-dom";

function NavigateBackButton ()
{
	let navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className={styles.button}
		>
			Go Back
		</button>
	);
}

export default NavigateBackButton;