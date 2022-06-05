import styled from 'styled-components';
import {
	Segment,
	Image,
	Header,
} from 'semantic-ui-react';

// const productCardStyles = `
// display: flex!important;
// flex-direction: column!important;
// height: max-content;
// padding: 10px 0 ;
// `

export const StyledProductCard = styled(Segment)`
	display: flex!important;
	flex-direction: column!important;
	height: max-content;
	padding: 10px 0 ;
`

export const Details = styled(StyledProductCard)`
font-weight: 700!important;
	gap: 5px;
`;

export const Thumbnail = styled(Image)`
	width: 100%;
`
export const Title = styled(Header)`
	font-size: 32px!important;
`

export const Rating = styled.p`
	font-size: 14px;
`

export const Price = styled.p`
	font-size: 20px;
	color: #3F3F3F;
`

export const PrevPrice = styled.p`
	font-weight: 400;
	color: #919191;
`