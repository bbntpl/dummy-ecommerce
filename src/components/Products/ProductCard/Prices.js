import {
	Price,
	PrevPrice,
} from './product-card-styling';
import DecimalPrecision from '../../../scripts/decimalPrecision';

export default function ProductPrices({ price, discount }) {
	const discountedPrice = price - (price * (discount / 100));
	const roundedDiscountedPrice = DecimalPrecision.round(discountedPrice, 2);
	return (
		<span>
			<Price>
				{discount ? roundedDiscountedPrice : price}
			</Price>
			{
				discount &&
				<PrevPrice>
					{price}
				</PrevPrice>
			}
		</span>
	)
}