import { combineReducers } from 'redux';
import { searchRobots } from './robots';

export default combineReducers({
    robots: searchRobots,
})