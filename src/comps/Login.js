import React from 'react';
import '../styles/Login.css';
import GoogleLogin from 'react-google-login';

function Login(props) {
	const responseGoogle = (response) => {
		props.onUserLogin({ name: response.profileObj.name, imgUrl: response.profileObj.imageUrl });
	};

	return props.userDetails == null ? (
		<div className="login_container">
			<h1>Login</h1>
			<GoogleLogin
				className="google-login-icon"
				clientId="729280913518-7ir263353ihr5bqgs7k3mr7nfs5rss7o.apps.googleusercontent.com"
				buttonText="Login With Google"
				onSuccess={responseGoogle}
				theme="dark"
				onFailure={() => console.log('google login failure')}
				cookiePolicy={'single_host_origin'}
			/>
			<img className="github-login-icon" src={require('../images/github_login.png')} alt="Github login sign" />
		</div>
	) : (
		<div className="after_login">Hello, {props.userDetails.name}! </div>
	);
}

export default Login;
