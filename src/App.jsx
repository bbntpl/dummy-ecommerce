import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Page from './components/Page';

import { stateReducer } from './scripts/reducers/stateReducer';

const DUMMY_JSON_ARGS = { limit: 60, skip: 0 };
const { limit, skip } = DUMMY_JSON_ARGS;
const jsonURL = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

export default function App() {
	const initialState = { products: [], cart: [] };
	const [state, dispatch] = useReducer(stateReducer, initialState);
	const [itemsArranger, setItemsArranger] = useState({
		keyword: '',
		category: 'all',
		priceRange: 'all',
	});

	// fetch api data and initialize
	useEffect(() => {
		fetch(jsonURL)
			.then(res => res.json())
			.then(data => dispatch({
				type: 'INIT_PRODUCTS',
				payload: data.products,
			}));
	}, []);

	const handleItemsArranger = (event, type) => {
		setItemsArranger(itemsArranger => ({ ...itemsArranger, [type]: event }));
	}

	// getters
	const getTotalItemsInCart = () => {
		const { cart } = state;
		return cart.reduce((total, item) => {
			return total += item.quantity;
		}, 0);
	}

	const getItemQty = (id) => {
		const { cart } = state;
		const cartItemByIdArr = cart.filter(item => id === item.id);
		return cartItemByIdArr.length ? cartItemByIdArr[0].quantity : 0;
	}
	
	// passing dispatched actions as props
	const mapDispatchToProps = (dispatch) => {
		return {
			// dispatching actions
			addItemToCart: (payload) => dispatch({ type: 'ADD_ITEM_TO_CART', payload }),
			setCartItemQty: (payload) => dispatch({ type: 'SET_ITEM_QTY', payload }),
			decrementItemQty: (payload) => dispatch({ type: 'DECREMENT_ITEM_QTY', payload }),
			removeItemFromCart: (payload) => dispatch({ type: 'REMOVE_ITEM', payload }),
			removeEverythingFromCart: () => dispatch({ type: 'REMOVE_ALL_ITEMS' }),
		}
	}

	// compiling props to be passed on page components
	const propsForViews = {
		products: state.products,
		cart: state.cart,
		itemsArranger,
		getTotalItemsInCart,
		getItemQty,
		handleItemsArranger,
		mapDispatchToProps: mapDispatchToProps(dispatch),
	};

	return (
		<div className="App">
			<Header getTotalItemsInCart={getTotalItemsInCart} />
			<Page {...propsForViews} />
			<Footer />
		</div>
	);
}