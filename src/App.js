import {
	BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Page from './components/Page';

export default function App() {
	// fetch('https://dummyjson.com/products?limit=60&skip=0')
	// .then(res => res.json())
	// .then(console.log);
	// fetch('https://dummyjson.com/products/category/smartphones')
	// 	.then(res => res.json())
	// 	.then(console.log);

	return (
		<Router>
			<div className="App">
				<Header />
				<Page />
				<Footer />
			</div>
		</Router>
	);
}