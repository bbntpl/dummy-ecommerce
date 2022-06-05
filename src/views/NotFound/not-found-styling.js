import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export const StyledNotFound = styled(Container)`
	display: flex!important;
	flex-direction: column;
	align-items: center;
	& > p {
		text-align: center;
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 400;
	}
	& > a { 
		display: flex;
		color: #c54d59;
	}
	& > a:hover { text-decoration: underline; }
`