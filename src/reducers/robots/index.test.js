import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from '../../constants';

import * as reducers from './';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: '',
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, { 
            type: CHANGE_SEARCHFIELD, 
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });        
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: '',
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: { isPending: true },
        })).toEqual({
            ...initialStateRobots,
            isPending: true,
        })
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const myRobots = [{
            id: 1,
            name: 'Luis',
            email: 'luis@luis.com',
        }];

        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: myRobots,
        })).toEqual({
            ...initialStateRobots,
            robots: myRobots,
        })
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOOOO!!!!!!!!!!',
        })).toEqual({
            ...initialStateRobots,
            error: 'NOOOOOOO!!!!!!!!!!',
        })
    });
});
