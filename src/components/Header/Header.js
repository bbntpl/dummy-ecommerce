import { Grid } from 'semantic-ui-react';

import { StyledHeader } from './header-styling';
import NavMenu from '../NavMenu';
import DiffSizedLogos from './Logo';

export default function Header() {
	return (
		<StyledHeader>
			<Grid stackable container doubling>
				<Grid.Row columns={2} verticalAlign='middle'>
					<DiffSizedLogos />					
					<Grid.Column>
						<NavMenu />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</StyledHeader>
	)
}