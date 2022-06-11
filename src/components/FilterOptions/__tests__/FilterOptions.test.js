import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FilterOptions from '../FilterOptions';

jest.mock('../Searchbar', ({ searchKeyword }) => (
	<input value={searchKeyword} data-testid='search-input'></input>
));

jest.mock('../PriceRange', () => (
	<select multiple>
		<option value="1">A</option>
		<option value="2">B</option>
		<option value="3">C</option>
	</select>
))
const filterKeywords = {
	search: 'foo',
	category: 'bar',
	priceRange: { min: 0, max: 50 },
}

describe('Filter options', () => {
	describe('searchbar', () => {
		it('calls onchange from searchbar and must return the proper value', () => {
			const handleFilterKeyword = jest.fn();
			render(<FilterOptions
				filterKeywords={filterKeywords}
				handleFilterKeyword={handleFilterKeyword}
			/>);
			const input = screen.getByTestId('search-input');

			userEvent.type(input, 'baz');

			expect(input).toHaveValue('baz');
		});
		it('calls onchange number of times', () => {
			const handleFilterKeyword = jest.fn();
			render(<FilterOptions
				filterKeywords={filterKeywords}
				handleFilterKeyword={handleFilterKeyword}
			/>);
			const input = screen.getByRole('textbox');

			userEvent.type(input, 'baz');

			expect(handleFilterKeyword).toHaveBeenCalledTimes(3);
		});
	})
})