import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

import Error from './pages/Error';
import Menu from './pages/Menu';
// import CartProvider from './utils/cartContext';
import About from './pages/About';
import Footer from './components/Footer';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import ShoppingCartProvider from './utils/shoppingCartContext';

function App() {
	return (
		<BrowserRouter>
			<ShoppingCartProvider>
				<div className='App'>
					<Navbar />

					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/menu'
							element={<Menu />}
						/>
						<Route
							path='/cart'
							element={<Cart />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
						

						<Route
							path='/success'
							element={<Success />}
						/>
						<Route
							path='/cancel'
							element={<Cancel />}
						/>

						<Route
							path='*'
							element={<Error />}
						/>
					</Routes>

					<Footer />
				</div>
			</ShoppingCartProvider>
		</BrowserRouter>
	);
}
export default App;