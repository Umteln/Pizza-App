import { loadStripe } from '@stripe/stripe-js';

export async function stripeCheckout({ lineItems }) {
	let stripePromise = null;

	const getStripe = () => {
		if (!stripePromise) {
			stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
		}
		return stripePromise;
	};

	const stripe = await getStripe();

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: 'http://localhost:3000/cancel',
	});
}
