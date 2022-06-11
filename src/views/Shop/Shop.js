import { Container } from 'semantic-ui-react';

import ProductList from '../../components/Products/ProductList';
import FilterOptions from '../../components/FilterOptions';

export default function Shop(props) {
	const {
		products,
		addItemToCart,
		getItemQty,
		filterKeywords,
		handleFilterKeyword,
	} = props;

	return (
		<Container>
			<FilterOptions
				filterKeywords={filterKeywords}
				handleFilterKeyword={handleFilterKeyword}
			/> {
				<ProductList
					filterKeywords={filterKeywords}
					products={products}
					addItemToCart={addItemToCart}
					getItemQty={getItemQty}
				/>
			}
		</Container>
	)
}