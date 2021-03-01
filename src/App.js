import React, { useState } from 'react';
import './styles/App.css';
import NavBar from './comps/NavBar';
import MainModul from './screens/MainModul';

function App() {
	const [menuOption, setMenuOption] = useState('default');
	const [userDetails, setUserDetails] = useState(null);
	const [userType, setUserType] = useState('Consumer');

	return (
		<div className="App">
			<NavBar setMenuOption={(option) => setMenuOption(option)} userType={userType} setUserType={setUserType} />
			<MainModul
				userType={userType}
				userDetails={userDetails}
				onUserLogin={setUserDetails}
				menuOption={menuOption}
				setMenuOption={(option) => setMenuOption(option)}
			/>
		</div>
	);
}

export default App;
