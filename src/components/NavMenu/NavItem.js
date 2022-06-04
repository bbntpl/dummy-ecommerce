import { useState } from 'react';
import NavItemLink from './NavItemLink';
import NavButton from './NavButton';

export default function NavItem(props) {
	const { icon, linkTxt, to, childType } = props;
	const [isActive, setIsActive] = useState(false);
	const toggleActive = () => setIsActive(isActive => !isActive);
	return (
		to && childType === 'link' ?
			<NavItemLink
				icon={icon}
				linkTxt={linkTxt}
				to={to}
				toggleActive={toggleActive}
				isActive={isActive}
				childType={childType}
			/> : <NavButton
				icon={icon}
				childType={childType}
				altTxt={linkTxt}
				isActive={isActive}
				toggleActive={toggleActive}
			/>
	)
}