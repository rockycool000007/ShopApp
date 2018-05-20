import React from 'react';
import Product from './Product';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Product />).toJSON();
    expect(rendered).toBeTruthy();
});
