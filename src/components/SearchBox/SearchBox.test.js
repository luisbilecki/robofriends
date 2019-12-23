import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '.';

it('expect to render SearchBox component', () => {    
    expect(shallow(<SearchBox onSearchChange={jest.fn()} />)).toMatchSnapshot();
});