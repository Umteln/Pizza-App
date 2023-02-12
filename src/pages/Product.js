import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../utils/cartContext';
import { productsArray } from '../utils/productStore';
import '../styles/Product.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Product = () => {
	const { addOneToCart, minusOneFromCart, cartProducts } = useContext(CartContext);
	const { id } = useParams();
	const product = cartProducts[id];

	return (
		<div className='product'>
			<div
				className='leftSide'
				style={{ backgroundImage: `url(${product.image})` }}
			></div>
			<div className='rightSide'>
				<h1>{product.title}</h1>
				<p>{product.description}</p>
				<p>${product.price}</p>

				{product.quantity > 0 ? (
					<div className='quanity-button'>
						<button onClick={() => addOneToCart(product.id)}>
							<AddIcon />
						</button>
						<button onClick={() => minusOneFromCart(product.id)}>
							<RemoveIcon />
						</button>
					</div>
				) : (
					<button onClick={() => addOneToCart(product.id)}>Add To Cart</button>
				)}

				<div className='quantity'>
					<p>Quantity: {product.quantity}</p>
				</div>
			</div>
			<div className='link'>
				<Link to='/menu'>
					<button> Return to Menu </button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
