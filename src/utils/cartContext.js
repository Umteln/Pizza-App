import { createContext, useState } from 'react';
import { productsArray, getProductData } from './productStore';

export const CartContext = createContext({
	items: [],
	getDefaultCart: () => {},
	getProductQuantity: () => {}, //placeholder basically stating a function will be here
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState(productsArray);
	const [openLinks, setOpenLinks] = useState(false);

	//functions

	const updateLocalStorage = (tempCart) => {
		setCartProducts(tempCart);
		localStorage.setItem('cart', JSON.stringify(tempCart));
	};

	//add one to cart

	function addOneToCart(id) {
		const tempCart = [...cartProducts];
		tempCart.forEach((cartProduct, index) => {
			if (cartProduct.id === id) {
				tempCart[index].quantity++;
			}
		});
		updateLocalStorage(tempCart);
	}

	// remove one from cart
	function minusOneFromCart(id) {
		const tempCart = [...cartProducts];
		tempCart.forEach((cartProduct, index) => {
			if (cartProduct.id === id) {
				tempCart[index].quantity--;
			}
		});
		updateLocalStorage(tempCart);
	}

	function getCartItems() {
		let items = [];
		cartProducts.forEach((cartItem) => {
			if (cartItem.quantity > 0) {
				items.push(cartItem);
			}
			setCartProducts(items);
		});
	}

	//total cost
	function getTotalCost() {
		let totalCost = 0;
		cartProducts.forEach((cartItem) => {
			const productData = getProductData(cartItem.id);
			totalCost += productData.price * cartItem.quantity;
		});
		return totalCost.toFixed(2);
	}

	const contextValue = {
		items: cartProducts,
		cartProducts,
		getCartItems,
		setCartProducts,
		addOneToCart,
		minusOneFromCart,
		getTotalCost,
		openLinks,
		setOpenLinks,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;
