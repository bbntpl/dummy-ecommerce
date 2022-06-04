// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, IconBtn } from './nav-menu-styling';

export default function NavItemLink(props) {
	const {
		icon,
		linkTxt,
		to,
		childType,
		isActive,
	} = props;
	const { standard, active } = icon;
	return (
		<MenuItem as='li' childType={childType} isActive={isActive}>
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