import { createContext } from 'react';
import { render } from 'react-dom';
import './index.css';
// import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-less/semantic.less'
import App from './App';

const TransitionContext = createContext();

const transitionsState = {
	transitions: false,
	flipMove: false,
};

const root = document.getElementById('root');
render(
	<TransitionContext.Provider value={transitionsState}>
		<App />
	</TransitionContext.Provider>
	, root);
