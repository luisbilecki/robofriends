import React from 'react';
import { shallow } from 'enzyme';

import Scroll from './';

it('expect to render Scroll component', () => {    
    expect(shallow(<Scroll />)).toMatchSnapshot();
});