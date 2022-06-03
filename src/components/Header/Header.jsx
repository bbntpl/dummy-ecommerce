import { Container, Grid } from 'semantic-ui-react';
import { StyledHeader } from './header-styling';

export default function Header() {
	return (
		<StyledHeader>
			<Container>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</StyledHeader>
	)
}