import React, { useContext } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../utils/cartContext';

const CartItem = ({ product }) => {
	const { addOneToCart, minusOneFromCart } = useContext(CartContext);

	return (
		<div className='cartItem'>
			{''}
			<img
				src={product.image}
				alt={product.title}
			/>
			<div className='description'>
				<h1>
					{' '}
					<b>{product.title}</b>
				</h1>
				<p>{product.price}</p>

				<div className='countHandler'>
					<p>Quantity: {product.quantity}</p>

					<button onClick={() => addOneToCart(product.id)}>
						<AddIcon />
					</button>
					<button onClick={() => minusOneFromCart(product.id)}>
						<RemoveIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
