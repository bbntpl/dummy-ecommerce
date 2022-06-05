import { Link } from 'react-router-dom';
import { Title } from './product-card-styling';

export default function TitleRating(props) {
	const { title, rating, id, product } = props;
	return (
		<Link to={`product/${id}`}>
			<Title>
				{`${title} - `}
			</Title>
			<span> ★ {rating}</span>
		</Link>
	)
}