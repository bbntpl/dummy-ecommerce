import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from '../ProductCard';

const product = {
	discountPercentage: 12.96,
	id: 1,
	price: 549,
	rating: 4.69,
	stock: 4,
	thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
	title: 'iPhone 9',
}

it('should render expected data and the el wrapper', () => {
	const { container } = render(
		<Router>
			<ProductCard {...product} />
		</Router>
	);

	
});

it('replace add to card button with out of stock', () => {

});