const initialState = {
    albums: [],
    count: 0
}

const albumListReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
        case 'FIND':
            return action.data;
    }
}

export const findAlbums = (query, offset) => async (dispatch) => {
    const response = await service.findAlbums(query, offset);
    dispatch({
        type: 'FIND',
        data: {
            albums: response.data.results.albummatches.album,
            count: response.data.results['opensearch:totalResults']
        }
    })
}

export default albumlistReducer