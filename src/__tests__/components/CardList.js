import React from 'react';
import { shallow } from 'enzyme';

import CardList from '../../components/CardList';

it('expect to render CardList component', () => { 
    const mockRobots = [
        {
            id:  '1',
            name: 'Luis',
            username: 'luis',
            email: 'luis@email.com',
        },
    ];

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});