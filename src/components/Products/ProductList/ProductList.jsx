import { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../ProductCard';
import styled from 'styled-components';

const StyledProductList = styled(Grid)`
	background: transparent!
`

const ProductListContainer = ({ columns, only, children }) => {
	return (
		<StyledProductList
			container
			centered
			doubling
			padded
		>
			<Grid.Row columns={columns} only={only} stretched>
				{children}
			</Grid.Row>
		</StyledProductList>
	)
}

export default function ProductList({ products }) {
	// render iterated product card elements
	const IteratedProducts = products.map((product, productIndex) => (
		<Grid.Column key={`product-card${productIndex}`}>
			<ProductCard product={product} />
		</Grid.Column>
	))

	return (
		<Fragment>
			<ProductListContainer columns={4} only='computer'>
				{IteratedProducts}
			</ProductListContainer>
			<ProductListContainer columns={3} only='tablet'>
				{IteratedProducts}
			</ProductListContainer>
			<ProductListContainer columns={1} only='mobile'>
				{IteratedProducts}
			</ProductListContainer>
		</Fragment>
	)
}