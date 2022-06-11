import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Searchbar from '../Searchbar'

jest.mock('../Searchbar', () => (
	<>
		<input></input>
		<button></button>
	</>
));

describe('searchbar filter', () => {
	it('calls onchange number of times', () => {
		const handleFilterKeyword = jest.fn();
		render(<Searchbar handleFilterKeyword={handleFilterKeyword} />);
		const input = screen.getByRole('textbox');

		userEvent.type(input, 'baz');

		expect(handleFilterKeyword).toHaveBeenCalledTimes(3);
	});
	it('calls onchange must expect the proper input value', () => {
		const handleFilterKeyword = jest.fn();
		render(<Searchbar handleFilterKeyword={handleFilterKeyword} />);
		const input = screen.getByRole('textbox');

		userEvent.type(input, 'baz');

		expect(input).toHaveValue('baz');
	});
	it('does update the value outside the component', () => {
		let inputVal = '';
		const handleFilterKeyword = jest.fn(({ value }) => inputVal = value);
		render(<Searchbar
			searchKeyword={inputVal}
			handleFilterKeyword={handleFilterKeyword}
		/>);

		const input = screen.getByRole('textbox');

		userEvent.type(input, 'baz-foo-bar');

		expect(inputVal).toMatch('baz-foo-bar');
	});
});