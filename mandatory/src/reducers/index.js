import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import racesReducer from './racesReducer';
import pointsReducer from './pointsReducer';

export default combineReducers ({
    drivers: driversReducer,
    races: racesReducer,
    points: pointsReducer
});