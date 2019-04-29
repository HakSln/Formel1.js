import ergast from '../apis/ergast';

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
};

export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};

export const fetchResult = () => async dispatch => {
    const response = await ergast.get(`/api/f1/2019/results.json`);
    dispatch({type: 'FETCH_RESULTS', payload: response.data.MRData.RaceTable.Races})
};

export const fetchStatus = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/status.json');
    dispatch({type: 'FETCH_STATUS', payload: response.data.MRData.StatusTable.Status})
};

export const fetchPoints = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/constructorStandings.json');
    dispatch({type: 'FETCH_POINTS', payload: response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings})
};