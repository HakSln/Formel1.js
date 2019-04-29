export default (state=[ ], action) => {
    switch (action.type){ case 'FETCH_POINTS':
    return action.payload;
    default: return state;}    
};