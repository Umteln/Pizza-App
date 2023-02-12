import Cheese from '../images/pizzaHero.jpg';
import Margherita from '../images/margherita.jpg';
import Special from '../images/specialpizza.jpg';
import Vegan from '../images/vegan.jpg';
import Pineapple from '../images/pineapple.jpg';
import Expensive from '../images/expensive.jpg';

export const productsArray = [
	{
		id: 'price_1MT2y9CY6RECS3apMYpbIpAe',
		image: Cheese,
		title: 'Cheese Pizza',
		description: 'Marinara sauce, basil, and mozzarella cheese',
		price: 19.99,
	},

	{
		id: 'price_1MXNOBCY6RECS3apNFifuqM4',
		title: 'Margherita Pizza',
		image: Margherita,
		price: 17.99,
		description:
			'Marinara sauce, basil, roma tomatoes, red onions, olives, and mozzarella cheese',
	},
	{
		id: 'price_1MXNSECY6RECS3apooTb43a9',
		title: 'Special Pizza',
		image: Special,
		price: 25.99,
		description:
			'Marinara sauce, basil, roma tomatoes, red onions, olives, and mozzarella cheese',
	},
	{
		id: 'price_1MXNTlCY6RECS3apZUQrYbWG',
		title: 'Vegan Pizza',
		image: Vegan,
		price: 17.99,
		description:
			'Marinara sauce, green peppers, roma tomatoes, red onions, olives, and vegan cheese',
	},
	{
		id: 'price_1MXpFPCY6RECS3apHuDMegGO',
		title: 'Pineapple Pizza',
		image: Pineapple,
		price: 14.99,
		description:
			'Marinara sauce, pineapple slices, turkey ham, red onions, and mozzarella cheese',
		quantity: 0,
	},
	{
		id: 'price_1MXpHdCY6RECS3apLlz91nCr',
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
