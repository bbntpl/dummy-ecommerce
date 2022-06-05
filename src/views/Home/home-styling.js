import styled from 'styled-components';
import {
	Container,
	Button,
	Header,
	Image,
	Segment,
} from 'semantic-ui-react';
import breakpoints from '../../util/breakpoints';

const { device } = breakpoints;

export const Hero = styled(Container)`
	background-color: transparent!important;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	& div {
		background-color: transparent!important;
		border: none!important;
		box-shadow: none!important;
		z-index: 200;
	}
`

export const HeroTextsContainer = styled(Segment)`
font-weight: 400!important;
max-width: 700px;
width: 100%;
& > * {
	text-transform: uppercase!important;
	margin-bottom: 80px;
}
`
export const MainHeader = styled(Header)`
	font-size: clamp(1.8rem, 10vw, 4rem)!important;
`

export const SecondaryHeader = styled(Header)`
	margin: 30px 0!important;
	font-size: clamp(1.4rem, 4vw, 2.5rem)!important;
`

export const HeroImage = styled(Image)`
	height: auto;
	position: absolute!important;
	top: 40px;
	right: 0;
	@media only screen and ${device.xs} {
		max-width: 430px!important;
		right: 0;
	}
	@media only screen and ${device.sm}{
		max-width: 530px!important;
	}
	@media only screen and ${device.lg}{
		max-width: 630px!important;
	}
	width: 90%;
	z-index: 30;
`

export const StyledHeroButton = styled(Button)`
	text-transform: uppercase!important;
`