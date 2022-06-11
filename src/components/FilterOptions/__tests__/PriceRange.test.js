import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PriceRange from '../PriceRange';

describe('Price Range dropdown', () => {
	it('emits handleChange to change the value of selected option', () => {
		const priceRange = { min: '', max: '' }
		const handleChange = jest.fn();
		render(
			<PriceRange
				handleFilterKeyword={handleChange}
			/>);
		const selectEl = screen.getByRole('listbox');

		expect(priceRange).toEqual(300);
	});
	it('')
});