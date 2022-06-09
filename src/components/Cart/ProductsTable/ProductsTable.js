import { Button, Header, Table, TableFooter } from 'semantic-ui-react';
import TableItem from '../TableItem/TableItem';
import { CartTableHeader, ItemCount } from './products-table-styling';

const IteratedProductList = (props) => {
	const { cart } = props;

	// exclude some unnecessary props
	const createTableItemProps = (props) => {
		const copiedProps = { ...props };
		delete copiedProps.cart;
		delete copiedProps.resetCart;
		delete copiedProps.totalCost;
		return copiedProps;
	}

	return cart.map((product, i) => (
		<TableItem
			key={`table-item-${i}`}
			product={product}
			{...createTableItemProps(props)}
			indexId={(i + 1)}
		/>
	));
}

export default function ProductsTable(props) {
	const { getTotalItems, resetCart, totalCost } = props;

	return (
		<Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell />
					<Table.HeaderCell colSpan='10'>
						<CartTableHeader>
							<Header>
								{'Cart '}
							</Header>
							<ItemCount>
								{`(${getTotalItems()} item${getTotalItems() >= 2 ? 's' : ''})`}
							</ItemCount>
						</CartTableHeader>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<IteratedProductList {...props} />
			<TableFooter fullWidth>
				<Table.Row>
					<Table.HeaderCell colSpan='9' textAlign='right'>
						<Button onClick={() => resetCart()}>
							Remove all products
						</Button>
					</Table.HeaderCell>
					<Table.HeaderCell>
						<strong>
							{`$ ${totalCost}`}
						</strong>
					</Table.HeaderCell>
				</Table.Row>
			</TableFooter>
		</Table>
	)
}