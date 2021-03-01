import React from 'react';
import CheckerInfo from '../comps/CheckerInfo';
import FontSizeChangerComp from '../comps/FontSizeChangerComp';
import '../styles/CheckerInfo.css';

const ForCheckerScreen = () => {
	const fixText = (str) => {
		return str.split('\n').map((i, key) => {
			return (
				<div className="forTheChecker" key={key}>
					{i}
				</div>
			);
		});
	};

	const generalInfo = fixText(
		'This website introduces some information about our initiative, the product, the initiators and more,\naccording to the consumers and developers points of view.\nYou can switch between the consumer and the developer views using the "Im a developer" and "Im a consumer" buttons in the navigation bar.\nThe website was built using React.js framework.\n\n\nWe will now briefly describe the different screens on our website:\n\n\nConsumers Home Screen - This screen contains links to different Github repositories. In the near future, some of these repositories\n will be introduced as products on this website (according to the business plan that is described in the project initiation document).\nIn addition, it contains our blog. Currently, the articles in this blog are demo. The purpose of this blog will be described in the Traction section.\n\n\nDevelopers Home Screen - This screen shows a preview of the developers business plan,\n and has a link to a Youtube video that describe the XSCODE product.\n\n\nConsumers Product Screen - This screen introduces some information about the product, in the consumers point of view.\n\n\nDevelopers Product Screen - This screen intorduces some information about the product, in the developer point of view.\n\n\nAbout Us Screen - This screen introduces the team members\n\n\nContact Us Screen - This screen contains a contact form\n\n\nInvestors Screen - This screen is designed to attract investors to come and invest our initiative, using the Headstart project'
	);
	const regulationsInfo = fixText(
		'XS: CODE initiative has to comply with a number of different regulations.\nFirst, software quality assurance (SQA) standards. Among these standards:\n\n\nISO 9000 - This standard is based on seven quality management principles (customer focus,\nimprovement, process approach, etc.) and helps the enterprise ensure that their products and\nservices are tailored to the customers needs.\n\n\nCMMI level - which can be used to direct process improvement. An organization is valued and\nawarded a matriculation grade (1-5) based on the type of assessment. Software quality\nassurance is very important for the enterprise software service to succeed in the market and\nsurvive up to customer expectations.\n\n\nSecond, information security regulation. The GitHub system on which it is based is exposed to an\nunprecedented amount of information when it takes care of the interface between different\nsystems in different companies. This information may be sensitive information that we do not\nwish to disclose to anyone. Therefore, the value of information security is high.'
	);
	const privacyInfo = fixText(
		'The initiative will work according to security ring model, which describes 6 realms that\nencompass the various realms that need to take care in order to create complete protection:\n\n\n1. Physical security - coping is by choosing a suitable site, protecting it and operating warning\nequipment against the possible risks.\n\n\n2. Access control - verifying identity and permissions.\n\n\n3. Data security - (in storage and transfer):\n   A. Backups and Overload Prevention\n   B. Encryption and decryption\nC. Database security\n\n\n4. Software security - exposure to intentional and unintentional damage.\n\n\n5. Communication Security and Internet Security - According to five security mechanisms:\n   A. Confirmation of user identification and authentication\n   B. firewall\n   C. data protection (encryption and protocols)\n   D. data protection - integrity for detection of unauthorized changes\n   E. ontrol of independent reports on communication activities that helps check security effectiveness and detect suspicious actions\n\n\n6. Security procedures and indirect protection measures - indirect security measures, for\nrecovery after the first line of protection has been breached: insurance, backup, contingent plan\nfor an emergency.'
	);
	const uiInfo = fixText(
		'Our website contains an accessibility plugin, that allows to customize the size of the text in each of the different screens.'
	);
	const seoInfo = fixText(
		'In this section, we performed a few different steps:\n\n\nMetadata keywords - we defined some keywords in the metadata property of the Index html file.\nThe keywords are: GitHub, GitHub repositories, React, Python, Javascript, Coding, Source Control.\n\nLinks - We added links to github repositories, and to the social media. This links will increase the rate of our website in the search engines algorithms.\n\nImages alternate text - We added an alternate text for each image.\n\nBlog - We created a blog that contains articles related to our product field.\n One of its purposes is to increase the ways that our website can appear in the search engines.'
	);
	const tractionInfo = fixText(
		'In order to increase the traction in our website, and to keep in contact with outside populations and investors, we performed the following steps:\n\n\n1. Blog - We created a blog to attract outside populations that will encounter these articles.\n\n2. Contact Us form - A tool to keep in contact with potential customers or investors.\n\n3. Investors Screen - contains a link to our headstart project (it is currently a demo link),\n and a link to our PID, that contains all the information for investors about our product.'
	);

	return (
		<div>
			<FontSizeChangerComp targets={['#checkerInfo .checkerInfoTitle', '#checkerInfo .checkerInfoText']} />
			<div className="checkerScreen">
				<CheckerInfo title="General" info={generalInfo} />
				<CheckerInfo title="Regulation" info={regulationsInfo} />
				<CheckerInfo title="Information security and privacy" info={privacyInfo} />
				<CheckerInfo title="Accessibility" info={uiInfo} />
				<CheckerInfo title="SEO,Analytics,Metrics" info={seoInfo} />
				<CheckerInfo
					title="Traction and interaction with outside populations and investors"
					info={tractionInfo}
				/>
			</div>
		</div>
	);
};

export default ForCheckerScreen;
