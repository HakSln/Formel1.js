export default (state=[], action) => {
    switch (action.type) { 
    case 'FETCH_STATUS': return action.payload;
    default: return state;
    }
};