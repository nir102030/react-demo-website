import React from 'react';
import DevRepoComp from '../comps/DevRepoComp';
import FontSizeChangerComp from '../comps/FontSizeChangerComp';
import '../styles/AboutUs.css';

const AboutUs = () => {
	const ourStoryString1 =
		'We started xscode with one goal in mind – empowering developers on both sides of the equation. Both open source developers,\n and developers who use open-source when developing for companies and R&D teams. We truly believe that creating a sustainable\n way to develop and use open source, is a mutual interest of developers, and commercial companies alike.';
	const ourStoryString2 =
		'After spending months listening to the hearts of developers, companies and members of the open source community and realizing\n their challenges,  we have developed what we believe to be a fair, simple, and clear way ensure developers are compensated\n for their open source work and companies get access to better,  frequently maintained code – all while keeping the code\n open and free for the benefit of the open source community.';

	const fixText = (str) => {
		return str.split('\n').map((i, key) => {
			return (
				<div className="ourStoryLine" key={key}>
					{i}
				</div>
			);
		});
	};

	const ourStory1 = fixText(ourStoryString1);
	const ourStory2 = fixText(ourStoryString2);

	const repoList = [
		{
			name: 'CEO',
			description: fixText(
				'After his successful startup in the mobile development field, he came to share\n from his experience as an entrepreneur'
			),
			devName: 'Nir Katz',
			devImg: require('../images/nir.jpg'),
			linkedin: 'https://www.linkedin.com/in/nir102030/',
		},
		{
			name: 'Chief Financial Officer',
			description: fixText(
				"Nir's partner in the mobile startup, and the head behind everything. expert in financial management\n for initiatives in their beginnings"
			),
			devName: 'Bar Yanuka',
			devImg: require('../images/bar.jpg'),
			linkedin: 'https://www.linkedin.com/in/bar-yanuka-14a982183/',
		},
		{
			name: 'Information Systems Manager',
			description: fixText(
				"Years of experience in the High-tech industry and in the information systems world\n didn't stop Inbar from coming to our new initiative "
			),
			devName: 'Inbar Privman',
			devImg: require('../images/inbar.jpg'),
			linkedin: 'https://www.linkedin.com/in/inbarprivman/',
		},
		{
			name: 'Chief Technology Officer',
			description: fixText(
				'After gaining experience in a classified technological role in the army, she got into the shoes of\n the Chief Technology Officer in our company'
			),
			devName: 'Sapir Shoyerman',
			devImg: require('../images/sapir.jpg'),
			linkedin: 'https://www.linkedin.com/in/sapir-shoyerman/',
		},
	];
	const repoItems = repoList.map((repo) => {
		return <DevRepoComp repo={repo} />;
	});

	return (
		<div>
			<FontSizeChangerComp
				targets={[
					'#repoDetails .devRepoName',
					'#repoDetails .devRepoDescription',
					'#devDetails .devRepoDevName',
					'#ourStory .ourStoryTitle',
					'#ourStoryText .ourStory1',
					'#ourStoryText .ourStory2',
					'#ourTeam .ourTeamTitle',
				]}
			/>
			<div id="ourStory" className="ourStory">
				<h1 className="ourStoryTitle">Our Story</h1>
				<div id="ourStoryText" className="ourStoryText">
					<text className="ourStory1">{ourStory1}</text>
					<text className="ourStory2">{ourStory2}</text>
				</div>
			</div>
			<div id="ourTeam" className="ourTeam">
				<h1 className="ourTeamTitle">Our Team</h1>
				<ul>{repoItems}</ul>
			</div>
		</div>
	);
};

export default AboutUs;
