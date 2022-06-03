import { Image } from 'semantic-ui-react';

const logoImports = [
	{ device: 'mobile', size: 'xsmall' },
	{ device: 'tablet', size: 'medium' },
	{ device: 'computer', size: 'large' },
];

export default function Logo() {
	return logoImports.map(async (logo, i) => {
		const { device, size } = logo;
		const logoSrc
			= await import(`../../assets/logo/${size}-themerc-logo.png`);
			console.log(logoSrc);
		return await (
			<Image
				key={i}
				src={logoSrc}
				only={device}
			/>
		)
	})
}