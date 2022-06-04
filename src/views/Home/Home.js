import {
	Segment,
	Container,
	Header,
	Button,
	Icon,
	Image,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import BGImage from '../../assets/images/homepage__illustration.png';

function ShopButton() {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate('/shop')} size='large'>
			<Icon name='shopping bag' />
			Shop Now
		</Button>
	)
}
function HeroIntro() {
	return (
		<Segment>
			<Header>Welcome to <strong>THEMERC</strong></Header>
			<Header>A  built for Random <strong>THEMERC</strong> products</Header>
			<ShopButton />
		</Segment>
	)
}

function HeroImage() {
	return <Image src={BGImage} />
}
export default function Home() {
	return (
		<Container>
			<HeroIntro></HeroIntro>
			<HeroImage></HeroImage>
		</Container>
	)
}