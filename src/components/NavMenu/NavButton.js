import { IconBtn } from './nav-menu-styling';
import { StyledNavButton } from './nav-menu-styling';
import { MenuItem } from './nav-menu-styling';

export default function NavButton(props) {
	const {
		icon,
		altTxt,
		isActive,
		toggleActive,
		childType,
	} = props;
	const { standard, active } = icon;
	return (
		<MenuItem as='li' childType={childType}>
			<StyledNavButton onClick={() => toggleActive()}>
				<IconBtn
					src={isActive ? active : standard}
					alt={altTxt}
				/>
			</StyledNavButton>
		</MenuItem>
	)
}