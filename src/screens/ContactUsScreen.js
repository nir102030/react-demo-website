import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUsScreen = (props) => {
	const [fname, setFname] = useState(null);
	const [lname, setLname] = useState(null);
	const [email, setEmail] = useState(null);
	const [message, setMessage] = useState(null);
	// const [mailSent, setMailSent] = useState(false);
	// const [error, setError] = useState(null);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		var fn = '';
		var ln = '';
		for (let key in fname) {
			fn = fname[key];
		}
		for (let key in lname) {
			ln = lname[key];
		}
		alert('Thank you ' + fn + ' ' + ln + '! your inquiry was received and we will contact you soon :)');
		document.getElementById('contactUsForm').reset();
	};

	return (
		<div className="contact_us" id="contact_us">
			<img alt="xscode logo" src={require('../images/xscodeLogo.png')} style={{ marginTop: '100px' }}></img>
			<form id="contactUsForm" className="contactUsForm" action="/action_page.php">
				<input
					type="text"
					id="fname"
					name="firstname"
					placeholder="Your name.."
					fname={fname}
					onChange={(e) => setFname({ fname: e.target.value })}
				/>
				<input
					type="text"
					id="lname"
					name="lastname"
					placeholder="Your last name.."
					lname={lname}
					onChange={(e) => setLname({ lname: e.target.value })}
				/>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your email"
					email={email}
					onChange={(e) => setEmail({ email: e.target.value })}
				/>
				<textarea
					id="subject"
					name="subject"
					placeholder="Description.."
					message={message}
					onChange={(e) => setMessage({ message: e.target.value })}
				></textarea>
				<input type="submit" onClick={(e) => handleFormSubmit(e)} value="Submit" />
			</form>
			<div className="connectImeges">
				<a
					style={{ display: 'table-cell' }}
					href="https://www.facebook.com/xscode.community/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="connect" alt="facebook" src={require('../images/facebook.png')} />
				</a>
				<a
					style={{ display: 'table-cell' }}
					href="https://www.linkedin.com/company/xs-code/?originalSubdomain=il"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="connect" alt="linkedin" src={require('../images/linkedin.jpg')} />
				</a>
			</div>
		</div>
	);
};

export default ContactUsScreen;
