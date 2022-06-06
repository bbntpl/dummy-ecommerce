// import { useState, useReducer } from 'react';
import { Container } from 'semantic-ui-react';
import ProductList from '../../components/Products/ProductList';
// import FilterOptions from '../../components/FilterOptions';

export default function Shop(props) {
	const {
		products,
		addItemToCart,
		getItemQty,
		// itemsArranger,
		// handleItemsArranger,
	} = props;
	// const [filteredProducts, setFilteredProducts] = useState(products);

	// const filterBykeyword = ({ state, value }) => {
		
	// }

	// const filterByPriceRange = ({ state, value }) => {

	// }

	// const filterByCategory = ({ state, value }) => {
	// 	if()
	// }

	// const filterByEnteredPrice = ({ state, min, max }) => {

	// }

	// useEffect(() => {

	// }, [itemsArranger]);


	return (
		<Container>
			{/* <Breadcrumb /> */}
			{/* <FilterOptions
				itemsArranger={itemsArranger}
				handleItemsArranger={handleItemsArranger}
			/> */}
			<ProductList
				products={products}
				addItemToCart={addItemToCart}
				getItemQty={getItemQty}
			/>
		</Container>
	)
}