import mainService from '../services/mainService'

const initialState = {
    albumData: [],
    count: 0
}

const albumListReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return state;
        case 'FIND':
            return action.data;
        case 'FETCH_ALBUM_INFO':
            return action.data
    }
}

export const findAlbums = (query, offset) => async (dispatch) => {
    const response = await mainService.findAlbums(query, offset);
    dispatch({
        type: 'FIND',
        data: {
            albumData: response.data.results.albummatches.album,
            count: response.data.results['opensearch:totalResults']
        }
    })
}

export const fetchAlbum = (artist, album) => async (dispatch) => {
    const responseAlbum = await mainService.fetchAlbumInfo(artist, album);
    const responseSimilar = await mainService.fetchSimilarArtists(artist);
    dispatch({
        type: 'FETCH_ALBUM_INFO',
        data: {
            albumData: {
                album: responseAlbum.data.album,
                similarArtists: responseSimilar.data.similarartists.artist
            },
            count: 1
        }
    })
}

export default albumListReducer