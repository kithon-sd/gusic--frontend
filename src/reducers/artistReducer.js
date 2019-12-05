import mainService from '../services/mainService'

const initialState = {
    artistData: {},
}

const artistReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
        case 'FETCH_ARTIST_INFO':
            return action.data
    }
}

export const fetchArtistInfo = artist => async dispatch => {
    const response = await mainService.fetchArtistInfo(artist);
    dispatch({
        type: 'FETCH_ARTIST_INFO',
        data: {
            artistData: response.data.artist
        }
    })
}

export default artistReducer