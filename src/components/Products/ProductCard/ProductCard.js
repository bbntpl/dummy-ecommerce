import { Icon } from 'semantic-ui-react';
import {
	StyledProductCard,
	ProductDetails,
	ProductImage,
	ProductDiscount,
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
		discountPercentage,
	} = product;
	return (
		<StyledProductCard>
			<ProductImage src={thumbnail} />
			<ProductDetails>
				<TitleRating
					title={title}
					id={id}
					rating={rating}
					product={product}
				/>
				<ProductDiscount>
					{`SAVE ${discountPercentage}%`}
				</ProductDiscount>
				<Prices price={price} discount={discountPercentage} />
				<button onClick={() => addToCart(id)} size='large'>
					<Icon name='shopping cart' />
					Add to Cart
				</button>
			</ProductDetails>
		</StyledProductCard>
	)
}