import React from 'react';
import '../styles/MainModule.css';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ProductPageDeveloper from './ProductPageDeveloper';
import AboutUs from './AboutUs';
import Login from '../comps/Login';
import Register from '../comps/Register';
import DeveloperHomePage from '../screens/DeveloperHomePage';
import ContactUsScreen from '../screens/ContactUsScreen';
import ForCheckerScreen from '../screens/ForCheckerScreen';
import InvestorsScreen from '../screens/InvestorsScreen';

function MainModul(props) {
	const menuOption = props.menuOption;
	const homePage =
		props.userType === 'Consumer' ? <HomePage setMenuOption={props.setMenuOption} /> : <DeveloperHomePage />;
	const productPage = props.userType === 'Consumer' ? <ProductPage /> : <ProductPageDeveloper />;

	switch (menuOption) {
		case 'default':
			return <div>{homePage}</div>;

		case 'product':
			return <div>{productPage}</div>;

		case 'about':
			return (
				<div>
					<AboutUs />
				</div>
			);

		case 'login':
			return (
				<Login
					setMenuOption={props.setMenuOption}
					userDetails={props.userDetails}
					onUserLogin={props.onUserLogin}
				/>
			);

		case 'register':
			return <Register />;

		case 'contactUs':
			return <ContactUsScreen />;

		case 'investors':
			return <InvestorsScreen />;

		default:
			return null;
	}
}

export default MainModul;
