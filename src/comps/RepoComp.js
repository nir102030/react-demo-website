import React from 'react';
import '../styles/RepoComp.css';

function RepoComp(props) {
	const link = `https://github.com/search?q=${props.name}`;
	const altText = `This image shows the ${props.name} logo`;
	return (
		<div id="RepoContainer" className="RepoContainer">
			<text className="text">{props.name}</text>
			<a style={{ display: 'table-cell' }} href={link} target="_blank" rel="noopener noreferrer">
				<img src={props.imgSrc} alt={altText} className="image" />
			</a>
		</div>
	);
}

export default RepoComp;
