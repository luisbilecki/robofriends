import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './';

let wrapper;

describe('Main Page', () => {
    let robots = [];

    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false,
        };
        robots = [{                
            id: 3,
            name: 'Luis',
            email: 'luis@email.com',
        }];

        wrapper = shallow(<MainPage {...mockProps} />)
    });

    it('renders MainPage without crashing', () => {    
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: robots,
            searchField: 'luis',
            isPending: false,
        };
        const wrapper2 = shallow(<MainPage {...mockProps2} />);

        expect(wrapper2.instance().filterRobots(robots)).toEqual([robots[0]]);
    });

    it('return empty filtered robots', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: robots,
            searchField: 'e',
            isPending: false,
        };
        const filteredRobots = [];
        const wrapper2 = shallow(<MainPage {...mockProps} />);

        expect(wrapper2.instance().filterRobots(robots)).toEqual(filteredRobots);
    });
});
