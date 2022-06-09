import styled from 'styled-components';

export const CartItemQtyBtn = styled.button`
border: none;
& > .increment {
	background-color: green;
}
& > .decrement {
	background-color: red;
}
color: white;
padding: 4px 2px;
`

export const CartItemImage = styled.div`
width: 50%;
height: auto;
& img {
	width: 100%;
	height: auto;
}
`

export const ItemQuantityCounter = styled.div`
display: flex;
padding: 4px 0;
justify-content: space-evenly;
`