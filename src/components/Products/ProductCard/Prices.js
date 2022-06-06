import {
	Price,
	PrevPrice,
} from './product-card-styling';
import DecimalPrecision from '../../../scripts/decimalPrecision';
import { discountedPrice } from '../../../scripts/reusableFuncs';
export default function ProductPrices(props) {
	const { discount, price } = props;
	const roundedPrice = DecimalPrecision.round(discountedPrice(price, discount), 2);
	return (
		<span>
			<Price>
				${discount ? roundedPrice : price}
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