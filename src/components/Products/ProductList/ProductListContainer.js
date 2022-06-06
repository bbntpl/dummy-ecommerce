import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledProductList = styled(Grid)`
	background: transparent!
`

export default function ProductListContainer({ columns, only, children }) {
	return (
		<StyledProductList container centered doubling padded>
			<Grid.Row columns={columns} only={only} stretched>
				{children}
			</Grid.Row>
		</StyledProductList>
	)
}