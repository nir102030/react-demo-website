import React from 'react';
import background from '../images/croud_funding.png';
import '../styles/Investors.css';

const InvestorsScreen = () => {
	const fixText = (str) => {
		return str.split('\n').map((i, key) => {
			return (
				<div className="ourStoryLine" key={key}>
					{i}
				</div>
			);
		});
	};
	// const text = fixText();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: `url(${background})`,
				height: '100vh',
			}}
		>
			<div className="contentContainer">
				<h1 className="investorsTitle">Love our idea? Come and invest us!</h1>
				<p className="investorsText" style={{}}>
					These days, we are standing in front of our first investments round.
					<br /> If you want to be a part of us, and have an important role in our future success,
					<br /> join our crowdfunding project!
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: '30px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginRight: '60px',
						}}
					>
						<a
							href="https://headstart.co.il/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ flex: 4 }}
						>
							<img
								src={require('../images/Headstart.png')}
								alt="headstart"
								style={{
									height: '40px',
									width: '150px',
									borderRadius: '10px',
								}}
							/>
						</a>
						<text
							style={{
								marginTop: '10px',
								fontWeight: 'bold',
								flex: 1,
							}}
						>
							Headstart project
						</text>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<a href={require('../images/InitiatorsDoc.pdf')} target="_blank" rel="noopener noreferrer">
							<img
								src={require('../images/pid.png')}
								alt="pid"
								style={{ height: '60px', width: '80px', borderRadius: '10px' }}
							/>
						</a>
						<text style={{ marginTop: '10px', fontWeight: 'bold', alignSelf: 'bottom' }}>
							Initiation Document
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestorsScreen;
