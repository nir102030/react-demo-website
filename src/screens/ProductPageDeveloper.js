import React from 'react';
import ProductComp from '../comps/ProductComp';
import '../styles/ProductPage.css';
import FontSizeChangerComp from '../comps/FontSizeChangerComp';

function ProductPageDeveloper(props) {
	const developerProducts = [
		{
			title: 'Services',
			text: `Companies using your code need your help.\n Offer paid support, bug fixing, ongoing maintanance,\n customizations and integrations.`,
			imgSrc: require('../images/services.webp'),
			direction: 'left',
		},
		{
			title: 'Paid code versions',
			text:
				'Open source doesn’t have to be free of charge.\n Offer premium versions of your code on a private repository\n only available to paying users as a subscription.',
			imgSrc: require('../images/paidCodeVersions.webp'),
			direction: 'right',
		},
		{
			title: 'Licensing',
			text:
				'Open source licenses are a powerful tool - for developers!\n Use simple Dual Licensing to offer one license to paying\n users, and another to free users.',
			imgSrc: require('../images/Licensing.webp'),
			direction: 'left',
		},
	];
	const productsList = developerProducts.map((product) => {
		return <ProductComp product={product} />;
	});
	return (
		<div>
			<FontSizeChangerComp
				targets={[
					'#ProducCompTextContainerLeft .ProductCompTitle',
					'#ProducCompTextContainerLeft .ProductText',
					'#ProducCompTextContainerRight .ProductCompTitle',
					'#ProducCompTextContainerRight .ProductText',
					'#ProductContainer .productPageTitle',
				]}
			/>
			<div id="ProductContainer" className="ProductContainer">
				<h1 className="productPageTitle">For Developers</h1>
				<ul>{productsList}</ul>
			</div>
		</div>
	);
}

export default ProductPageDeveloper;
