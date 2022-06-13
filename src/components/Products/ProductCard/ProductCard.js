import { forwardRef } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { StyledProductCard, Details } from './product-card-styling';
import TitleRating from './TitleRating';
import Prices from './Prices';
import Thumbnail from './Thumbnail';
import PlaceholderImage from '../../../assets/images/image-placeholder.png';

const ProductCard = forwardRef((props, ref) => {
	const { product, addItemToCart, getItemQty } = props;
	const {
		id,
		title,
		thumbnail,
		price,
		rating,
		stock,
		category,
		discountPercentage,
	} = product;
	const isStockMoreThanQty = stock > getItemQty(id);

	// disallow to add item if quantity is more than the stock
	const addItemToCartIfAvailable = (id) => {
		if (!isStockMoreThanQty) return;
		addItemToCart({ targetId: id });
	}
	return (
		<div ref={ref} style={{ height: '100%' }}>
			<StyledProductCard>
				<Thumbnail 
				src={thumbnail} 
				category={category} 
				id={id} 
				placeholder={PlaceholderImage}
				/>
				<Details>
					<TitleRating
						title={title}
						id={id}
						rating={rating}
					/>
					<h3 className='product-card__discount'>{`SAVE ${discountPercentage}%`}</h3>
					<Prices price={price} discount={discountPercentage} />
					<Button
						onClick={() => addItemToCartIfAvailable(id)}
						size='large'
						disabled={!isStockMoreThanQty}
					>
						<Icon name='shopping cart' />
						{isStockMoreThanQty ? 'Add to cart' : 'Not enough stock'}
					</Button>
				</Details>
			</StyledProductCard>
		</div>
	)
})

export default ProductCard;