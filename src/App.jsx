import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Page from './components/Page';

export default function App() {

	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('https://dummyjson.com/products?limit=60&skip=0')
		.then(res => res.json())
		.then(data => setProducts(data.products));
	}, []);

	const propsForViews = {
		products,
		cart,
	}
	return (
		<Router>
			<div className="App">
				<Header />
				<Page {...propsForViews} />
				<Footer />
			</div>
		</Router>
	);
}