import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import background from '../images/pizza.jpg';

const Home = () => {
	return (
		<div
			className='home'
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='headerContainer'>
				<h1>Tank's Pizza</h1>
				<p>The best pizza in San Antonio, Texas </p>
				<Link to='/menu'>
					<button>Order Now</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
