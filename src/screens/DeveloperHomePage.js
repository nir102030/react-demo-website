import React from 'react';
import '../styles/DeveloperHomePage.css';

function DeveloperHomePage(props) {
	return (
		<div className="developerContainer">
			<div className="top">
				<text className="topText">Turn your open source project </text>
				<br />
				<text className="buttomText">into a revenue source</text>
				<a
					style={{ display: 'table-cell' }}
					href="https://youtu.be/ezPRgoMm4zg"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('../images/watch_video.png')}
						alt={'Watch video'}
						style={{ height: 100, width: 250 }}
					/>
				</a>
			</div>
			<h2 className="DevHeader">Sell products and services based on your Github repository</h2>
			<img
				className="package"
				src={require('../images/developerPackage.webp')}
				alt="Example of the different packeges that the developer can sell: Support Pack, Pro Version or MIT License"
			/>
		</div>
	);
}

export default DeveloperHomePage;
