import { useState, useCallback, memo } from 'react';
import { Image } from 'semantic-ui-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StyledProductGallery } from './product-gallery-styling';

function WideImageWrapper({ imageSrc }) {
	return (
		<div className='gallery__center-grid'>
			<LazyLoadImage
				alt={'wide-image'}
				src={imageSrc}
				effect='opacity'
			/>
		</div>
	)
}

function BottomGrid({ images, handleImageChange }) {
	const ImageGrids = images.map((src, i) => {
		return (
			<div
				key={`image-wrapper${i + 1}`}
				className='gallery__bottom-grid__card'
			>
				<LazyLoadImage
					src={src}
					onClick={() => handleImageChange(i + 1, src)}
					alt={`image${i + 1}`}
				/>;
			</div>
		);
	});

	return (
		<Image.Group size='small' className='gallery__bottom-grid'>
			{ImageGrids}
		</Image.Group>
	)
}

const MemoizedBottomGrid = memo(BottomGrid);

export default function ProductGallery({ images }) {
	const totalImages = images.length;
	const initialState = {
		id: totalImages,
		src: images[totalImages - 1],
	};
	const [wideImage, setWideImage] = useState(initialState);

	// replace the wide image with the clicked image
	const handleImageChange = useCallback((id, src) => {
		setWideImage(wideImage => ({ ...wideImage, id, src }));
	}, []);

	return (
		<StyledProductGallery>
				<WideImageWrapper imageSrc={wideImage.src} />
				<MemoizedBottomGrid images={images} handleImageChange={handleImageChange} />
		</StyledProductGallery>
	)
}