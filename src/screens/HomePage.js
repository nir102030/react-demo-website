import React from 'react';
import '../styles/HomePage.css';
import RepoComp from '../comps/RepoComp';
import FontSizeChangerComp from '../comps/FontSizeChangerComp';
import BlogComp from '../comps/BlogComp';

function HomePage(props) {
	const repos1 = [
		{ name: 'JavaScript', imgSrc: require('../images/javascript.svg') },
		{ name: 'Python', imgSrc: require('../images/python.svg') },
		{ name: 'React', imgSrc: require('../images/react.svg') },
		{ name: 'Java', imgSrc: require('../images/java.svg') },
		{ name: 'Node.js', imgSrc: require('../images/nodejs.svg') },
	];

	const repos2 = [
		{ name: 'Swift', imgSrc: require('../images/swift.svg') },
		{ name: 'Ruby', imgSrc: require('../images/ruby.svg') },
		{ name: 'Redis', imgSrc: require('../images/redis.svg') },
		{ name: 'Scala', imgSrc: require('../images/scala.svg') },
		{ name: 'Vue', imgSrc: require('../images/vue.svg') },
	];

	const blogs = [
		{
			title: 'The guaranteed funding program for exceptional open source projects',
			image: require('../images/blog1.jpg'),
			date: 'June 23, 2020',
		},
		{
			title: 'Deciding How to Monetize Your Open Source Project',
			image: require('../images/blog2.jpg'),
			date: 'June 22, 2020',
		},
		{
			title: '3 Principles to Speed Up Your R&D with Open Source',
			image: require('../images/blog3.jpg'),
			date: 'June 3, 2020',
		},
		{
			title: 'Announcing The Redis Open Source Grant Program',
			image: require('../images/blog4.gif'),
			date: 'May 18, 2020',
		},
		{
			title: 'Surviving the COVID-19 Crisis With Open Source',
			image: require('../images/blog5.jpeg'),
			date: 'April 30, 2020',
		},
	];

	const reposList = (repos) => {
		return repos.map((repo) => {
			return (
				<RepoComp
					name={repo.name}
					imgSrc={repo.imgSrc}
					setMenuOption={props.setMenuOption}
					setCurrentRepo={props.setCurrentRepo}
				/>
			);
		});
	};

	const blogList = (blogs) => {
		return blogs.map((blog) => {
			return <BlogComp title={blog.title} image={blog.image} date={blog.date} />;
		});
	};

	return (
		<div>
			<FontSizeChangerComp targets={['#RepoContainer .text']} />
			<div className="container">
				<h1>Find popular repositories by topic</h1>
				<ul className="repo">{reposList(repos1)}</ul>
				<ul className="repo">{reposList(repos2)}</ul>
			</div>
			<div style={{ marginTop: '80px' }}>
				<h1 style={{ marginBottom: '50px' }}>Our Blog</h1>
				<ul style={{ display: 'flex', flexDirection: 'column' }}>{blogList(blogs)}</ul>
			</div>
		</div>
	);
}

export default HomePage;
