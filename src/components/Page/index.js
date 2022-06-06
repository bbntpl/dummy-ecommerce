import { useRoutes } from 'react-router-dom';

import Home from '../../views/Home';
import Cart from '../../views/Cart';
import Shop from '../../views/Shop';
import NotFound from '../../views/NotFound';
import Product from '../../views/Product';

export default function Page(props) {
	const {
		products,
		cart,
		itemsArranger,
		handleItemsArranger,
		mapDispatchToProps,
		getItemQty,
	} = props;
	const {
		addItemToCart,
		setCartItemQty,
		decrementItemQty,
		removeItemFromCart,
		removeEverythingFromCart,
	} = mapDispatchToProps;

	return useRoutes([
		{
			path: '*',
			element: <NotFound />,
		},
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/shop',
			element: <Shop
				products={products}
				itemsArranger={itemsArranger}
				handleItemsArranger={handleItemsArranger}
				addItemToCart={addItemToCart}
				getItemQty={getItemQty}
			/>,
		},
		{
			path: '/cart',
			element: <Cart
				setCartItemQty={setCartItemQty}
				removeEverythingFromCart={removeEverythingFromCart}
				removeItemFromCart={removeItemFromCart}
				cart={cart}
			/>,
		},
		{
			path: '/shop/product/:id',
			element: <Product
				addItemToCart={addItemToCart}
				decrementItemQty={decrementItemQty}
				removeItemFromCart={removeItemFromCart}
				products={products}
			/>,
		},
	])
}