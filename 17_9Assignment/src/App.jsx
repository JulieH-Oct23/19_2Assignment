import styles from "./App.module.css";

import SpacecraftBuilder from "./components/SpacecraftBuilder.jsx";
import ItemForm from "./components/ItemForm";
import InventoryDisplay from "./components/InventoryDisplay";


function App ()
{
	return (
		<div className={styles.mainContainer}>
			<SpacecraftBuilder />
		</div>
	);
}

export default App;

