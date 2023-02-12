import React from 'react';
import { useNavigate } from 'react-router-dom';


const MenuItem = ({ product, id }) => {
	
	const navigate = useNavigate();

	return (
		<div
			className='menuItem'
			onClick={() => {
				navigate('/menu/' + id);
			}}
		>
			<div style={{ backgroundImage: `url(${product.image})` }}></div>

			<h1>{product.title}</h1>
			<p>${product.price}</p>

			
		</div>
	);
};

export default MenuItem;
