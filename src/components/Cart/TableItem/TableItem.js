import { useCallback } from 'react';
import { Table } from 'semantic-ui-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { discountedPrice } from '../../../scripts/reusableFuncs';
import DecimalPrecision from '../../../scripts/decimalPrecision';

import { CartItemImage, ItemQuantityCounter } from './table-item-styling';

export default function TableItem(props) {
	const {
		product,
		indexId,
		addItemToCart,
		removeItemFromCart,
		decrementItemQty,
	} = props;
	const {
		thumbnail,
		title,
		price,
		discountPercentage,
		stock,
		id,
		quantity,
	} = product;

	const newPrice = discountedPrice(price, discountPercentage);
	const roundedPrice = DecimalPrecision.round(newPrice * quantity, 2);

	const isQtyMoreThanStock = quantity >= stock;
	const conditionalItemRemove = useCallback((id) => {
		if (quantity === 1) {
			removeItemFromCart({ targetId: id });
		} else {
			decrementItemQty({ targetId: id });
		}
	}, [])
	return (
		<Table.Body>
			<Table.Row>
				<Table.Cell colSpan='1'>{indexId}</Table.Cell>
				<Table.Cell as='td' colSpan='1'>
					<CartItemImage>
						<LazyLoadImage src={thumbnail} />
					</CartItemImage>
				</Table.Cell>
				<Table.Cell colSpan='3'>
					<div>
						<Link to={`/shop/product/${id}`}>
							<h2>{title}</h2>
						</Link>
					</div>
				</Table.Cell>
				<Table.Cell colSpan='3'>
					<ItemQuantityCounter>
						<button
							className='decrement'
							onClick={() => conditionalItemRemove(id)}
						>
							-
						</button>
						<span>
							{`${quantity}`}
						</span>
						<button
							className='increment'
							disabled={isQtyMoreThanStock}
							onClick={() => addItemToCart({ targetId: id })}
						>
							+
						</button>
					</ItemQuantityCounter>
					<div>
						<button

							onClick={() => removeItemFromCart({ targetId: id })}
						>
							Remove item
						</button>
					</div>
				</Table.Cell>
				<Table.Cell colSpan='2'>
					{`$ ${roundedPrice}`}
				</Table.Cell>
			</Table.Row>
		</Table.Body >
	)
}