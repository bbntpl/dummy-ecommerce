// import { Container, Dropdown, Search } from 'semantic-ui-react';
import { FilterOptionsMenu } from './filter-options-styling';
import PriceRange from './PriceRange';
import ItemCategory from './ItemCategory';
import Searchbar from './Searchbar';
import { Button, Grid } from 'semantic-ui-react';

export default function FilterOptions({ filterKeywords, handleFilterKeyword }) {
	const { priceRange, category, search } = filterKeywords;

	const resetFilterKeywords = () => {
		const defaultFilterKeywords = {
			...filterKeywords,
			search: '', category: '', priceRange: { min: '', max: '' },
		}
		handleFilterKeyword({
			value: defaultFilterKeywords,
			type: '',
		})
	}
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column floated='left'>
					<FilterOptionsMenu borderless>
						<Searchbar
							searchKeyword={search}
							handleFilterKeyword={handleFilterKeyword}
						/>
						<ItemCategory
							category={category}
							handleFilterKeyword={handleFilterKeyword}
						/>
						<PriceRange
							priceRange={priceRange}
							handleFilterKeyword={handleFilterKeyword}
						/>
					</FilterOptionsMenu>
				</Grid.Column>
				<Grid.Column floated='right'>
					<Button onClick={resetFilterKeywords}>Reset filter</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}