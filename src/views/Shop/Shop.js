import { Container } from 'semantic-ui-react';
import ProductList from '../../components/Products/ProductList';

export default function Shop({products}) {
	return (
		<Container>
			{/* <Breadcrumb /> */}
			{/* <Searchbar /> */}
			<ProductList products={products}/>
		</Container>
	)
}