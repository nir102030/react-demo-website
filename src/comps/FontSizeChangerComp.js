import React from 'react';
import FontSizeChanger from 'react-font-size-changer';
import '../styles/FontSizeChanger.css';

const FontSizeChangerComp = (props) => {
	return (
		<div className="fontSizeChanger">
			<FontSizeChanger
				targets={props.targets}
				options={{
					stepSize: 2,
					range: 2,
				}}
				customButtons={{
					style: {
						backgroundColor: 'red',
						color: 'white',
						WebkitBoxSizing: 'border-box',
						WebkitBorderRadius: '5px',
						width: '60px',
						cursor: 'pointer',
					},
					buttonsMargin: 10,
				}}
			/>
		</div>
	);
};

export default FontSizeChangerComp;
