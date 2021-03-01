import React from 'react';
import ProductComp from '../comps/ProductComp';
import '../styles/ProductPage.css';
import FontSizeChangerComp from '../comps/FontSizeChangerComp';

function ProductPage(props) {
	const products = [
		{
			title: 'Developer Services',
			text: `Stop wasting precious developer hours on maintaining,\n fixing or integrating the open source projects you use.\n Get priority bug fixing, support, consulting or even code\n customization.`,
			imgSrc: require('../images/developerServices.webp'),
			direction: 'left',
		},
		{
			title: 'Premium code versions',
			text:
				'Not all open source code is available for free on the web.\n Access extended versions of open source components. Get\n extra features, better performance, more frequent updates\n and more.',
			imgSrc: require('../images/premiumCode.webp'),
			direction: 'right',
		},
		{
			title: 'Licensing',
			text:
				'Problems with open source licensing?\n Never let the public license of an open source component\n prevent you from using it. Get the license you need for the\n best components for your project.',
			imgSrc: require('../images/Licensing.webp'),
			direction: 'left',
		},
	];
	const productsList = products.map((product) => {
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
				<h1 className="productPageTitle">For Consumers</h1>
				<ul>{productsList}</ul>
			</div>
		</div>
	);
}

export default ProductPage;
