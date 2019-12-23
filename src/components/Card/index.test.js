import React from 'react';
import { shallow } from 'enzyme';

import Card from './';

it('expect to render Card component', () => {    
    expect(shallow(<Card />)).toMatchSnapshot();
});