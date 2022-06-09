import { Fragment, Suspense, useState, useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import ProductCard from '../ProductCard';
import ProductListContainer from './ProductListContainer';

export default function ProductList(props) {
	const { products, addItemToCart, getItemQty } = props;
	const [isLoading, setIsLoading] = useState(true);

	// render iterated product card elements
	const IteratedProducts = products.map((product, productIndex) => (
		<Grid.Column key={`product-card${productIndex}`}>
			<ProductCard
				product={product}
				addItemToCart={addItemToCart}
				getItemQty={getItemQty}
			/>
		</Grid.Column>
	));

	useEffect(() => {
		if(products.length !== IteratedProducts.length) {
			setIsLoading(true);
			return;
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, [products]);

	return (
		isLoading
			? <Loader active>Loading</Loader>
			: <Fragment>
				<Suspense fallback={<Loader />}>
					<ProductListContainer columns={4} only='computer'>
						{IteratedProducts}
					</ProductListContainer>
					<ProductListContainer columns={3} only='tablet'>
						{IteratedProducts}
					</ProductListContainer>
					<ProductListContainer columns={1} only='mobile'>
						{IteratedProducts}
					</ProductListContainer>
				</Suspense>
			</Fragment>
	)
}