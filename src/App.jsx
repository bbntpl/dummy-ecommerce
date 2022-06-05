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
		sortBy: 'all',
		orderBy: 'asc',
	});

	useEffect(() => {
		fetch(jsonURL)
			.then(res => res.json())
			.then(data => dispatch({ type: 'initProducts', payload: data }));
	}, []);

	const handleItemsArranger = (value, type) => {
		setItemsArranger(itemsArranger => ({ ...itemsArranger, [type]: value }));
	}

	const propsForViews = {
		products: state.products,
		cart: state.cart,
		itemsArranger,
		handleItemsArranger,
	}
	
	return (
		<div className="App">
			<Header />
			<Page {...propsForViews} />
			<Footer />
		</div>
	);
}