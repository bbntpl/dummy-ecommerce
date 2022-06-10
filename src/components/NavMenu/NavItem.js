import { NavLink } from 'react-router-dom';
import { MenuItem, IconBtn } from './nav-menu-styling';

export default function NavItem(props) {
	const {
		icon,
		linkTxt,
		to,
		childType,
	} = props;
	const { standard, active } = icon;
	return (
		<MenuItem as='li' childType={childType} >
			<NavLink to={to} className={({ isActive }) =>
				isActive ? 'nav-item--active' : undefined
			}>
				{({ isActive }) => (
					<>
						<IconBtn
							src={isActive ? active : standard}
							alt={linkTxt}
						/>
						{linkTxt}
					</>
				)}
			</NavLink>
		</MenuItem>
	)
}