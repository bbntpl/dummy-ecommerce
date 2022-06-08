import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Grid, Loader, Container } from 'semantic-ui-react';
import styled from 'styled-components';

import ProductDetails from '../../components/Products/ProductDetails';
import ProductGallery from '../../components/Products/ProductGallery';
import RelatedProductList from '../../components/Products/RelatedProductList';
import NotFound from '../NotFound';

const StyledSegment = styled(Segment)`
	background: transparent!important;
	border: none!important;
	box-shadow: none!important;
`
export default function Product(props) {
	const {
		setCartItemQty,
		getItemQty,
		resetCart,
	} = props;
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState();
	const [products, setProducts] = useState(props.products || []);

	useEffect(() => {
		if((!!product && isLoading)) {
			setIsLoading(isLoading => !isLoading);
			setProduct(undefined);
		}
	}, [props.id])

	useEffect(() => {
		if (!props.products.length) return;
		setProducts(products => [...products, props.products]);
	}, [props.products]);


	useEffect(() => {
		if (typeof product !== 'undefined') return;

		const productById = getProductById(Number(id));

		function getProductById(id) {
			return products.reduce((result, product) => {
				if (id === product.id) {
					result.push(product);
				}
				return result
			}, []);
		}

		// set product as null if id do not matches the product id
		// otherwise initialize the product
		setProduct(productById.length ? productById[0] : null);
	}, [products]);

	useEffect(() => {
		// set loading to false if product has a value 
		if (typeof product !== 'undefined') {
			setIsLoading(false);
		}
	}, [product]);

	return (
		!isLoading && !product
			? <NotFound />
			: <StyledSegment>
				{(isLoading && !product) && <Loader active>Loading</Loader>}
				{(!isLoading && product) &&
					<>
						<Grid container stackable>
							<Grid.Row columns={2} only='tablet computer'>
								<Grid.Column>
									<ProductGallery images={product.images} />
								</Grid.Column>
								<Grid.Column>
									<ProductDetails
										product={product}
										setCartItemQty={setCartItemQty}
										getItemQty={getItemQty}
										resetCart={resetCart}
									/>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row only='mobile'>
								<Grid.Column>
									<ProductDetails
										product={product}
										setCartItemQty={setCartItemQty}
										getItemQty={getItemQty}
										resetCart={resetCart}
									/>
								</Grid.Column>
								<Grid.Column>
									<ProductGallery images={product.images} />
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<RelatedProductList
							products={products}
							productCategory={product.category}
							productId={product.id}
						/>
					</>
				}
			</StyledSegment >
	)
}