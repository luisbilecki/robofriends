import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

it('expect to render Header component', () => {    
    expect(shallow(<Header />)).toMatchSnapshot();
});