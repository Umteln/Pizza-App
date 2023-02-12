import React, { useContext, useEffect, useState } from 'react';
import '../styles/CartItem.css';
import { stripeCheckout } from '../utils/stripeCheckout.js';
import CartProduct from '../components/CartProduct';
import { ShoppingCartContext } from '../utils/shoppingCartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
	const cart = useContext(ShoppingCartContext);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	const handleCheckout = () => {
		let items = cart.items.filter((product) => product.quantity !== 0);
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
				{productsCount > 0 ? (
					<>
						<p>Items in your cart:</p>
						{cart.items.map((currentProduct, idx) => (
							<CartProduct
								key={idx}
								id={currentProduct.id}
								quantity={currentProduct.quantity}
							></CartProduct>
						))}

						<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

						<div className='checkout'>
							<Link to='/menu'>
								<button>Add More</button>
							</Link>
							<button onClick={handleCheckout}>Purchase items!</button>
						</div>
					</>
				) : (
					<h1>There are no items in your cart!</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
