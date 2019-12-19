import { combineReducers } from 'redux';
import { searchRobots, requestRobots } from './robots';

export default combineReducers({
    searchRobots,
    requestRobots,
});