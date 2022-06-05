import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from '../index';

const product = {
	discountPercentage: 40,
	id: 1,
	price: 99.99,
	rating: 4.69,
	stock: 4,
	thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
	title: 'iPhone 9',
}

const addToCart = () => {
	product.stock -= 1;
}

it('should render elements with written output', () => {
	const { container } = render(
		<Router>
			<ProductCard product={product} addToCart={addToCart} />
		</Router>
	);

	expect(container).toMatchSnapshot();
});

it('disable addToCart button and replace text with out of stock', () => {
	render(
		<Router>
			<ProductCard product={product} addToCart={addToCart} />
		</Router>
	);
	const button = screen.getByRole('button');

	act(() => {
		for (let i = 0; i > 4; i++) {
			userEvent.click(screen.getByText(/add to cart/i));
		}
	});

	expect(button).toBeDisabled();
	expect(button).toHaveValue('Out of stock');
});