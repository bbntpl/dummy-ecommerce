import styled from 'styled-components';
import { Image, Segment } from 'semantic-ui-react';
import breakpoints from '../../util/breakpoints';

const { device } = breakpoints

export const StyledHeader = styled(Segment)`
	width: 100%;
	background-color: #4dc5ac!important;
	color: #4D0000!important;
	padding: 2rem 1rem!important;
	border: 2px solid black;
	box-shadow: none!important;
	border: none!important;
`;

export const Logo = styled(Image)`
@media only screen and ${device.lg}{
	background-image: ${import('../../assets/logo/large-themerc-logo.png')
		.then(logo => console.log(logo))}
}
@media only screen and ${device.sm}{
	background-image: ${import('../../assets/logo/medium-themerc-logo.png')
		.then(logo => console.log(logo))}
}
@media only screen and ${device.xs}{
	background-image: ${import('../../assets/logo/xsmall-themerc-logo.png')
		.then(logo => console.log(logo))}
}
`;