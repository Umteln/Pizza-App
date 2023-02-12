import Cheese from '../images/pizzaHero.jpg';
import Margherita from '../images/margherita.jpg';
import Special from '../images/specialpizza.jpg';
import Vegan from '../images/vegan.jpg';
import Pineapple from '../images/pineapple.jpg';
import Expensive from '../images/expensive.jpg';

export const productsArray = [
	{
		id: process.env.REACT_APP_FIREBASE_Cheese,
		image: Cheese,
		title: 'Cheese Pizza',
		description: 'Marinara sauce, basil, and mozzarella cheese',
		price: 19.99,
	},

	{
		id: process.env.REACT_APP_FIREBASE_Margherita,
		title: 'Margherita Pizza',
		image: Margherita,
		price: 17.99,
		description:
			'Marinara sauce, basil, roma tomatoes, red onions, olives, and mozzarella cheese',
	},
	{
		id: process.env.REACT_APP_FIREBASE_Special,
		title: 'Special Pizza',
		image: Special,
		price: 25.99,
		description:
			'Marinara sauce, basil, roma tomatoes, red onions, olives, and mozzarella cheese',
	},
	{
		id: process.env.REACT_APP_FIREBASE_Vegan,
		title: 'Vegan Pizza',
		image: Vegan,
		price: 17.99,
		description:
			'Marinara sauce, green peppers, roma tomatoes, red onions, olives, and vegan cheese',
	},
	{
		id: process.env.REACT_APP_FIREBASE_Pineapple,
		title: 'Pineapple Pizza',
		image: Pineapple,
		price: 14.99,
		description:
			'Marinara sauce, pineapple slices, turkey ham, red onions, and mozzarella cheese',
		quantity: 0,
	},
	{
		id: process.env.REACT_APP_FIREBASE_Bougie,
		title: 'Bougie Pizza',
		image: Expensive,
		price: 1299.99,
		description:
			'Marinara sauce, edible gold flakes, shredded brisket, roma tomatoes, red onions, olives, and mozzarella cheese',
		quantity: 0,
	},
];

export function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log('Product data does not exist for ID: ' + id);
		return undefined;
	}

	return productData;
}
