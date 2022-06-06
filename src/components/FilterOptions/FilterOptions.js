// import { Container, Dropdown, Search } from 'semantic-ui-react';
import { FilterOptionsMenu } from './filter-options-styling';
import PriceRange from './PriceRange';
import Category from './ItemCategory';
import Searchbar from './Searchbar';

export default function FilterOptions({ itemsArranger, handleItemsArranger }) {
	// const { sortBy, orderBy } = itemsArranger;

	return (
		<FilterOptionsMenu borderless>
			<Searchbar />
			<Category />
			<PriceRange />

			{/* <Dropdown
				text={`order by: ${orderBy}`}
				options={orderByOptions}
				onChange={(e) => handleItemsArranger(e, 'orderBy')}
			/> */}
		</FilterOptionsMenu>
	)
}