import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import racesReducer from './racesReducer';
import resultsReducer from './resultsReducer';
import statusReducer from './statusReducer';
import pointsReducer from './pointsReducer';

export default combineReducers ({
    drivers: driversReducer,
    races: racesReducer,
    results: resultsReducer,
    status: statusReducer,
    points: pointsReducer
});