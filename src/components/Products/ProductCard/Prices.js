import {
	Price,
	PrevPrice,
} from './product-card-styling';
import DecimalPrecision from '../../../scripts/decimalPrecision';

export default function ProductPrices({ price, discount }) {
	const discountedPrice = (price - ((discount / 100) * price));
	const roundedPriceBy2 = DecimalPrecision.round(discountedPrice, 2);
	return (
		<span>
			<Price>
				${discount ? roundedPriceBy2 : price}
			</Price>
			{
				discount &&
				<PrevPrice>
					${price}
				</PrevPrice>
			}
		</span>
	)
}