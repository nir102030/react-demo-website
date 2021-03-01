import React from 'react';
import '../styles/ProductComp.css';

function ProductComp(props) {
	const altText = `This image illustrates a ${props.product.title}`;
	const text = props.product.text.split('\n').map((i, key) => {
		return key === 0 && props.product.title !== 'Developer Services' ? (
			<div className="firstLineText" key={key}>
				{i}
			</div>
		) : key === 1 && props.product.title === 'Developer Services' ? (
			<div className="firstLineText" key={key}>
				{i}
			</div>
		) : (
			<div key={key}>{i}</div>
		);
	});

	return props.product.direction === 'left' ? (
		<div className="ProductCompContainer">
			<img className="ProductCompImg" src={props.product.imgSrc} alt={altText} />
			<div id="ProducCompTextContainerLeft" className="ProducCompTextContainerLeft">
				<h2 className="ProductCompTitle">{props.product.title}</h2>
				<text className="ProductText">{text}</text>
			</div>
		</div>
	) : (
		<div className="ProductCompContainer">
			<div id="ProducCompTextContainerRight" className="ProducCompTextContainerRight">
				<h2 className="ProductCompTitle">{props.product.title}</h2>
				<div className="ProductText">{text}</div>
			</div>
			<img className="ProductCompImg" src={props.product.imgSrc} alt={altText} />
		</div>
	);
}

export default ProductComp;
