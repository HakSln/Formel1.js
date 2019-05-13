import ergast from '../apis/ergast';

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
};

export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};

export const fetchPoints = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/constructorStandings.json');
    dispatch({type: 'FETCH_POINTS', payload: response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings})
};