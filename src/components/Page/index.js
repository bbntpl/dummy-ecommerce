import {
	useRoutes,
} from 'react-router-dom';

import Home from '../../views/Home';
import Cart from '../../views/Cart';
import Shop from '../../views/Shop';
import NotFound from '../../views/NotFound';

export default function Page(props) {
	const { products } = props;
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
			element: <Shop products={products} />,
		},
		{
			path: '/cart',
			element: <Cart />,
		},
	])
}