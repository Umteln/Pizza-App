import MenuItem from '../components/MenuItem';
import React from 'react';
import '../styles/Menu.css';

import { productsArray } from '../utils/productStore';

const Menu = () => {
	return (
		<div className='menu'>
			<h1 className='menuTitle'>Our Menu</h1>
			<div className='menuList'>
				{productsArray.map((product, idx) => (
					<MenuItem
						id={idx}
						product={product}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
};

export default Menu;
