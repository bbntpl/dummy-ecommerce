import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../views/Cart';

const cartItems = [
	{
		id: 1,
		title: 'title1',
		price: 10.10,
		discountPercentage: 20,
		stock: 8,
		thumbnail: null,
		quantity: 4,
	},
	{
		id: 2,
		title: 'title2',
		price: 10.11,
		discountPercentage: 30,
		stock: 5,
		thumbnail: null,
		quantity: 2,
	},
];

describe('conditionally render components by value of passed prop', () => {
	it('should render empty card placeholder', () => {
		const { container } = render(
			<Router><Cart cart={[]} /></Router>
		);

		expect(container).toMatchSnapshot();
	})

	it('should render cart features', () => {
		render(
			<Router>
				<Cart cart={cartItems} />
			</Router>
		);

		const totalItems = screen.getAllByText(/6 items/i);
		expect(totalItems).toBeTruthy();
	})
})

