import styled from 'styled-components';
import { Menu, Button } from 'semantic-ui-react';
import breakpoints from '../../util/breakpoints';

const { device, size } = breakpoints;

export const HeaderMenu = styled(Menu)`
list-style-type: none;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color: transparent;
gap: 2rem;
@media only screen and ${device.lg} {
	justify-content: flex-end;
}
@media only screen and (max-width: ${size.xs}) {
	float: left;
}
`

export const MenuItem = styled(Menu.Item)`
display: flex;
align-items: center;
margin: 0;
margin-left: ${props => props.childType === 'button' ? '1.5' : '.75'}rem;
& > a {
	display: flex;
	align-items: center;
	padding: .5rem 0;
	color: #4D0000!important;
	font-weight: ${props => props.isActive ? 'bold' : 400};
	text-transform: uppercase;
	background:
	${props => props.childType === 'link'
		? 'linear-gradient(#4D0000 0 0),linear-gradient(lightgray 0 0)'
		: ''};
	; 
	background-size:${props => props.isActive ? '' : '0% 3px,'}100% 3px;
	background-position:bottom left;
	background-repeat:no-repeat;
	transition: 0.25s;
	background-color: transparent;
}
& > a:hover {
	background-size:100% 3px;
}
`

export const IconBtn = styled.img`
	width: 24px;
	height: 24px;
`

export const StyledNavButton = styled(Button)`
	background: transparent!important;
	width: 24px;
	height: 24px;
	border: 1px solid black;
	padding: 0!important;
	margin: 0!important;
`