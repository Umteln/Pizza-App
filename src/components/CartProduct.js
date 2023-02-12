import { ShoppingCartContext } from '../utils/shoppingCartContext';
import { useContext } from 'react';
import { getProductData } from '../utils/productsStore';
import { Button, Paper } from '@mui/material';
import '../styles/CartItem.css';

const CartProduct = (props) => {
	const cart = useContext(ShoppingCartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<Paper className='cartItem'>
			<div>
				<img
					className='product-img'
					src={productData.image}
					alt={productData.tile}
				/>
			</div>
			<div className='description'>
				<h1>{productData.title}</h1>
				<p>{quantity} total</p>
				<p>${(quantity * productData.price).toFixed(2)}</p>
				<Button
					variant='contained'
					size='small'
					onClick={() => cart.deleteFromCart(id)}
				>
					Remove
				</Button>
			</div>
		</Paper>
	);
};

export default CartProduct;
