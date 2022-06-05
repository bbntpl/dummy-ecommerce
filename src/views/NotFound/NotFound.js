import { Link, useLocation } from 'react-router-dom';
import { StyledNotFound } from './not-found-styling';

export default function NotFound() {
	let location = useLocation();
	return (
		<StyledNotFound>
			<p>
			The page you navigated into; does not exist.
			</p>
			<Link to={{ pathname: '/', state: { prevPath: location.pathname } }}>
				Return back to previous/home page
			</Link>
		</StyledNotFound>
	)
}