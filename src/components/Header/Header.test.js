import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

it('expect to render Header component', () => {    
    expect(shallow(<Header />)).toMatchSnapshot();
});