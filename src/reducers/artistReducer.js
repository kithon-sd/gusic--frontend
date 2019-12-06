import mainService from '../services/mainService'

const initialState = {
    artistData: {},
}

const artistReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
        case 'FETCH_ARTIST_INFO':
            return {
                ...state,
                artistData: action.data.artistData
            }
        case 'FETCH_ARTIST_TOP_ALBUMS':
            return {
                ...state,
                artistTopAlbums: action.data.topAlbums
            }
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

export const fetchArtistTopAlbums = (artist, page = 1, limit = 3) => async dispatch => {
    const response = await mainService.fetchArtistTopAlbums(artist, page, limit);
    dispatch({
        type: 'FETCH_ARTIST_TOP_ALBUMS',
        data: {
            topAlbums: response.data.topalbums.album
        }
    })
}

export default artistReducer