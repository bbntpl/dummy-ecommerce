import { useState } from 'react';
import { Icon } from 'semantic-ui-react';

export default function Searchbar(props) {
	const { searchKeyword, handleFilterKeyword } = props;
	const [state, setState] = useState({ value: searchKeyword });
	const handleChange = (event) => {
		event.preventDefault();
		const { value } = event.target;
		setState({ value });
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleFilterKeyword({
			value: state.value,
			type: 'search',
		});
	}
	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input value={state.value} onChange={(e) => handleChange(e)} />
			<button type='submit'>
				<Icon name='search' />
			</button>
		</form>
	)
}