import { setSearchField, requestRobots } from '../../actions';

import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
} from '../../constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text,
    };

    expect(setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(requestRobots());

    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
});