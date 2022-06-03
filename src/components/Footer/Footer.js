import { Container, Grid } from 'semantic-ui-react';
import { StyledFooter } from './footer-styling';
import SocialLinks from './SocialLinks';
import CopyrightLink from './CopyrightLink';

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<Grid stackable>
					<Grid.Row columns={2} verticalAlign='middle'>
						<Grid.Column floated='left'>
							<CopyrightLink />
						</Grid.Column>
						<Grid.Column floated='right'>
							<SocialLinks />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</StyledFooter>
	)
}