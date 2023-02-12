// import { CartContext } from '../CartContext';
import { useContext } from 'react';
import '../styles/Product.css';
import { ShoppingCartContext } from '../utils/shoppingCartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';

function ProductCard({ product }) {
	const cart = useContext(ShoppingCartContext);
	const productQuantity = cart.getProductQuantity(product.id);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				sx={{ textAlign: 'center' }}
				title={product.title}
			/>
			<CardMedia
				component='img'
				height='194'
				image={product.image}
				alt={product.title}
			/>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Typography
					sx={{ textAlign: 'center' }}
					variant='body2'
					color='text.secondary'
				>
					{product.description}
				</Typography>

				<Typography>${product.price}</Typography>

				<CardActions
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{productQuantity > 0 ? (
						<>
							<form>
								<label>In Cart: </label>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										fontWeight: 700,
									}}
								>
									<AddIcon onClick={() => cart.addOneToCart(product.id)} />

									<span className='amount'> {productQuantity}</span>

									<RemoveIcon
										onClick={() => cart.removeOneFromCart(product.id)}
									/>
								</Box>
							</form>
						</>
					) : (
						<button
							className='product-btn'
							onClick={() => cart.addOneToCart(product.id)}
						>
							Add To Cart
						</button>
					)}
				</CardActions>
			</CardContent>
		</Card>
	);
}

export default ProductCard;
