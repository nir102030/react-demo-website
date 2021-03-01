import React from 'react';
import '../styles/DevRepoComp.css';

function DevRepoComp(props) {
	const altText = `This image shows the image of this repository developer - ${props.repo.devName}`;

	return (
		<div className="devRepoCompContainer">
			<div id="repoDetails" className="repoDetails">
				<text className="devRepoName">{props.repo.name}</text>
				<text className="devRepoDescription">{props.repo.description}</text>
			</div>
			<div id="devDetails" className="devDetails">
				<img className="devRepoImg" src={props.repo.devImg} alt={altText} />
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<a
						style={{ display: 'table-cell' }}
						href={props.repo.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={require('../images/linkedin.jpg')}
							alt={altText}
							style={{ height: '30px', width: '30px', borderRadius: '10px' }}
						/>
					</a>
					<text className="devRepoDevName">{props.repo.devName}</text>
				</div>
			</div>
		</div>
	);
}

export default DevRepoComp;
