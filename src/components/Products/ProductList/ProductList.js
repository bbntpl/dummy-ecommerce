import { Segment } from 'semantic-ui-react';
import ProductCard from '../ProductCard';

export default function ProductList(products) {
	return (
		<Segment>
			{
				// render iterated product card elements
				products.map((product, i) => (
					<ProductCard product={product} key={`product-card${i}`} />
				))
			}
		</Segment>
	)

}