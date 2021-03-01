import React from 'react';
import '../styles/NavBar.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogout } from 'react-google-login';
import Register from './Register';

const NAVBAR_OPTIONS = [
	{ value: 'default', text: 'Home' },
	{ value: 'product', text: 'Product' },
	{ value: 'about', text: 'About Us' },
	{ value: 'contactUs', text: 'Contact Us' },
];

const useStyles = makeStyles({
	avatar: {
		margin: 10,
		color: '#000000',
		backgroundColor: 'rgb(8, 172, 144)',
		fontSize: 15,
	},
});

function NavBar(props) {
	const classes = useStyles();

	const navbarLinks = NAVBAR_OPTIONS.map((navbarOption) => (
		<div
			id={navbarOption.value}
			key={'navbaroption_' + navbarOption.value}
			className="menutext"
			onClick={() => props.setMenuOption(navbarOption.value)}
		>
			{navbarOption.text}
		</div>
	));

	const userLoginComp =
		props.userDetails == null ? (
			<div
				id="login"
				key={'navbaroption_login'}
				className="menutext"
				onClick={() => props.setMenuOption('login')}
			>
				Login
			</div>
		) : (
			<div className="connected_user_navbar">
				<div className="hello_connected_user">Hello {props.userDetails.name}</div>
				<GoogleLogout
					className="logout_btn"
					clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={() => props.onUserLogin(null)}
				></GoogleLogout>
			</div>
		);

	return (
		<div className="topnav">
			<div className="avatarDiv">
				<Avatar
					src={props.userDetails == null ? null : props.userDetails.imgUrl}
					className={classes.avatar}
				></Avatar>
			</div>
			<div>{navbarLinks}</div>
			<div className="warning">This is a demo website! The information is not real.</div>
			<div className="menutextRight">
				<Register />
			</div>
			{userLoginComp}
			<text
				className="menutextRight"
				onClick={() => {
					props.userType === 'Consumer' ? props.setUserType('Developer') : props.setUserType('Consumer');
				}}
			>
				{props.userType === 'Consumer' ? "I'm a developer" : "I'm a consumer"}
			</text>
		</div>
	);
}

export default NavBar;
