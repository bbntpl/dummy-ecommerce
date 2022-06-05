import styled from 'styled-components';
import {
	Segment,
	Image,
	Header,
} from 'semantic-ui-react';

const productCardStyles = `
	display: flex!important;
	flex-direction: column!important;
	width: 100%;
	padding: 10px 0 ;
`;

export const StyledProductCard = styled(Segment)`
	${productCardStyles}
	align-items: flex-between;
	height: 100%;
	& h3 {
		font-size: 14px;
	}
`

export const Details = styled(StyledProductCard)`
	${productCardStyles}
	font-weight: 700!important;
	gap: 5px;
	width: 100%;
	align-items: center!important;
	height: max-content;
`;

export const Thumbnail = styled(Image)`
	height: max(250px, auto);
	width: max(100%, 40%);
`
export const Title = styled(Header)`
	display: inline!important;
	font-size: clamp(1rem 3vw 3rem)!important;
`

export const Price = styled.p`
	display: inline-block;
	font-size: 20px;
	color: #3F3F3F;
`

export const PrevPrice = styled.p`
	display: inline-block;
	padding-left: 13px;
	font-weight: 400;
	color: #919191;
	text-decoration: line-through;
`