import NavItem from './NavItem';
import { HeaderMenu } from './nav-menu-styling';
import OutlineCartIcon from '../../assets/icons/outline-shopping-cart.svg';
import SolidCartIcon from '../../assets/icons/solid-shopping-cart.svg';
import OutlineBagIcon from '../../assets/icons/outline-shopping-bag.svg';
import SolidBagIcon from '../../assets/icons/solid-shopping-bag.svg';
import OutlineSettingsIcon from '../../assets/icons/outline-settings.png';
import SolidSettingsIcon from '../../assets/icons/solid-settings.svg';

const navProps = [
	{
		icon: {
			standard: OutlineBagIcon,
			active: SolidBagIcon,
		},
		linkTxt: 'Shop',
		to: '/shop',
		childType: 'link',
	},
	{
		icon: {
			standard: OutlineCartIcon,
			active: SolidCartIcon,
		},
		linkTxt: 'Cart',
		to: '/cart',
		childType: 'link',
	},
	{
		icon: {
			standard: OutlineSettingsIcon,
			active: SolidSettingsIcon,
		},
		childType: 'button',
	},
];

export default function NavMenu() {
	const NavItems = navProps.map((item, i) => {
		const { icon, activeIcon, linkTxt, to, childType } = item;
		return <NavItem
			icon={icon}
			activeIcon={activeIcon}
			linkTxt={linkTxt}
			to={to}
			childType={childType}
			key={`nav-item-${i}`}
		/>
	});

	return (
		<HeaderMenu as='ul'>
			{NavItems}
		</HeaderMenu>
	)
}