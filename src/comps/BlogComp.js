import React from 'react';

const BlogComp = (props) => {
	const altText = `${props.title} blog`;
	return (
		<div style={{ display: 'flex', marginBottom: '80px', justifyContent: 'flex-start', marginLeft: '300px' }}>
			<img src={props.image} alt={altText} style={{ height: '250px', width: '350px', marginBottom: '20px' }} />
			<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
				<text style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '15px' }}>{props.title}</text>
				<text style={{ color: 'blue', alignSelf: 'flex-start', marginTop: '10px' }}>{props.date}</text>
			</div>
		</div>
	);
};

export default BlogComp;
