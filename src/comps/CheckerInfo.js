import React from 'react';
import '../styles/CheckerInfo.css';

const CheckerInfo = (props) => {
	return (
		<div id="checkerInfo" className="checkerInfo">
			<h2 className="checkerInfoTitle">{props.title}</h2>
			<text className="checkerInfoText">{props.info}</text>
		</div>
	);
};

export default CheckerInfo;
