import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../utils/cartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import '../styles/CartItem.css';
import { stripeCheckout } from '../utils/stripeCheckout.js';

const Cart = () => {
	const [firstLoad, setFirstLoad] = useState(true);
	const { getTotalCost, setCartProducts, cartProducts } =
		useContext(CartContext);
	const total = getTotalCost();

	useEffect(() => {
		if (firstLoad) {
			const storedCart = localStorage.getItem('cart');
			const parsedStoredCart = JSON.parse(storedCart);
			setCartProducts(parsedStoredCart);
			setFirstLoad(false);
		}
	}, [firstLoad, setCartProducts]);

	const handleCheckout = () => {
		let items = cartProducts.filter((product) => product.quantity !== 0);
		let lineItems = [];
		items.forEach((item) => {
			lineItems.push({
				price: item.id,
				quantity: item.quantity,
			});
		});

		stripeCheckout({ lineItems });
	};

	return (
		<div className='cart'>
			<h1 className='cartTitle'>Your Cart Items</h1>
			<div className='cartList'>
				{cartProducts.map((product) =>
					product.quantity !== 0 ? (
						<CartItem
							key={product.id}
							product={product}
						/>
					) : (
						''
					)
				)}
			</div>
			<h2>Total: ${total}</h2>
			<div className='checkout'>
				<Link to='/menu'>
					<button>Add More</button>
				</Link>

				<button onClick={handleCheckout}>Checkout</button>
			</div>
		</div>
	);
};

export default Cart;
