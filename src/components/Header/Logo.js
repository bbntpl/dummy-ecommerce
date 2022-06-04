import { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { ImageLink } from './header-styling';

const logoImports = [
	{ device: 'mobile', size: 'xsmall' },
	{ device: 'tablet', size: 'medium' },
	{ device: 'computer', size: 'large' },
];

export default function DiffSizedLogos() {
	const [imgSrcs, setImgSrcs] = useState({});

	return logoImports.map(({ device, size }, i) => {

		const loadImage = async (logoSize) => {
			try {
				const response = await import(`../../assets/logo/${logoSize}-themerc-logo.png`);
				setImgSrcs(imageSrcs => ({
					...imageSrcs, [logoSize]: response.default,
				}));
			} catch (err) {
				console.log(err);
			}
		}
		typeof imgSrcs[size] === 'undefined' && loadImage(size);
		return (
			<Grid.Column key={`${size}-logo${i}`} only={device}>
				<ImageLink to='/'>
					<span>{
						typeof imgSrcs[size] !== 'undefined' &&
						<Image
							className='logo'
							src={imgSrcs[size]}
							alt={`${imgSrcs[size].split('-')[0]} logo`}
						/>
					}</span>
				</ImageLink>
			</Grid.Column>
		)
	})
}