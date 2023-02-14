import { loadStripe } from '@stripe/stripe-js';

export async function stripeCheckout({ lineItems }) {
	let stripePromise = null;

	const getStripe = () => {
		if (!stripePromise) {
			stripePromise = loadStripe(
				'pk_test_51MQFWyCY6RECS3apKSowerKt1MIPvOTby1URScxXXKjVxTfRIDgKSeuN3uQ8U7HpOGHt8bGxOUsyu5TQXdeWdJCv00O8gajikz'
			);
		}
		return stripePromise;
	};

	const stripe = await getStripe();

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: `${window.location.origin}/cancel`,
	});
}
