import { Button, Icon } from 'semantic-ui-react';
import {
	StyledProductCard,
	Details,
	Thumbnail,
} from './product-card-styling';
import TitleRating from './TitleRating';
import Prices from './Prices';

export default function ProductCard(props) {
	const { product, addToCart } = props;
	const {
		id,
		title,
		thumbnail,
		price,
		rating,
		stock,
		discountPercentage,
	} = product;
	return (
		<StyledProductCard>
			<Thumbnail src={thumbnail} />
			<Details>
				<TitleRating
					title={title}
					id={id}
					rating={rating}
					product={product}
				/>
				<h3>{`SAVE ${discountPercentage}%`}</h3>
				<Prices price={price} discount={discountPercentage} />
				<Button
					onClick={() => addToCart(id)}
					size='large'
					disabled={stock === 0}
				>
					<Icon name='shopping cart' />
					{ stock ? 'Add to cart' : 'Out of stock'}
				</Button>
			</Details>
		</StyledProductCard>
	)
}