import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';

export default function App() {
	// fetch('https://dummyjson.com/products?limit=60&skip=0')
	// .then(res => res.json())
	// .then(console.log);
	// fetch('https://dummyjson.com/products/category/smartphones')
	// 	.then(res => res.json())
	// 	.then(console.log);

	return (
		<div className="App">
			<Header></Header>
			{/* <Main></Main> */}
			<Footer />
		</div>
	);
}