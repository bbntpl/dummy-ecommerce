import { render } from '@testing-library/react';
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
	it('should render placeholder element', () => {
		const { container } = render(
			<Router>
				<Cart cart={[]} />
			</Router>
		);

		expect(container).toMatchSnapshot();
	})

	it('should render cart features', () => {
		const { container } = render(
			<Router>
				<Cart cart={cartItems} />
			</Router>
		);

		expect(container).toMatchSnapshot();
	})
})

