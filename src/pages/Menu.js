import React from 'react';
import '../styles/Menu.css';
import { productsArray } from '../utils/productsStore';
import ProductCard from '../components/ProductCard';

const Menu = () => {
	return (
		<div className='menu'>
			<h1 className='menuTitle'>Our Menu</h1>
			<div className='menuList'>
				{productsArray.map((product, index) => (
					<ProductCard
						product={product}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Menu;
