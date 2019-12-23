import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '.';

it('expect to render ErrorBoundary component', () => {    
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});