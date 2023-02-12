import { createContext, useState } from 'react';
import { productsArray, getProductData } from './productsStore';

export const ShoppingCartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
});

export function ShoppingCartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);
    const [openLinks, setOpenLinks] = useState(false);
	// [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

	function getProductQuantity(id) {
		const quantity = cartProducts.find(
			(product) => product.id === id
		)?.quantity;

		if (quantity === undefined) {
			return 0;
		}

		return quantity;
	}

	function addOneToCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity === 0) {
			// product is not in cart
			setCartProducts([
				...cartProducts,
				{
					id: id,
					quantity: 1,
				},
			]);
		} else {
			// product is in cart
			// [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
			setCartProducts(
				cartProducts.map(
					(product) =>
						product.id === id // if condition
							? { ...product, quantity: product.quantity + 1 } // if statement is true
							: product // if statement is false
				)
			);
		}
		localStorage.setItem('cart', JSON.stringify(cartProducts));
	}

	function removeOneFromCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity === 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map(
					(product) =>
						product.id === id // if condition
							? { ...product, quantity: product.quantity - 1 } // if statement is true
							: product // if statement is false
				)
			);
		}
		localStorage.setItem('cart', JSON.stringify(cartProducts));
	}

	function deleteFromCart(id) {
		// [] if an object meets a condition, add the object to array
		// [product1, product2, product3]
		// [product1, product3]
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct.id !== id;
			})
		);
		localStorage.setItem('cart', JSON.stringify(cartProducts));
	}

	function getTotalCost() {
		let totalCost = 0;
		cartProducts.map((cartItem) => {
			const productData = getProductData(cartItem.id);
			totalCost += productData.price * cartItem.quantity;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartProducts,
		cartProducts,
		openLinks, 
		setOpenLinks,
		setCartProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getTotalCost,
	};

	return (
		<ShoppingCartContext.Provider value={contextValue}>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export default ShoppingCartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
