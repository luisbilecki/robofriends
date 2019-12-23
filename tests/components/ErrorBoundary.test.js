import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '../../components/ErrorBoundary';

it('expect to render ErrorBoundary component', () => {    
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});