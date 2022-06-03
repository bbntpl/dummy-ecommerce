import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '../Logo';

it('should render an image', () => {
	render(<Logo />);
	console.log(screen);
})