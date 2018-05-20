import React from 'react';
import Cart from './Cart';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Cart />).toJSON();
    expect(rendered).toBeTruthy();
});
