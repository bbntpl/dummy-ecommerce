import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Shop from '../views/Shop';

describe('Shop page', () => {
	it.todo('must render list of items filtered by search keyword');
	it.todo('must render list of items filtered by category keyword');
	it.todo('must render list of items filtered by price range');
	it.todo('must not render anything if the filter keywords do not match a value from the given item')
})