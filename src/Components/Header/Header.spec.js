import React from 'react';
import Header from './Header';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Header />).toJSON();
    expect(rendered).toBeTruthy();
});
