import axios from 'axios'

const url = 'http://localhost:3003'

const findAlbums = async (query, offset) => {
    const response = await axios.get(url, {
        params: {
            query: query
        }
    })
    return response
}

const fetchAlbumInfo = async (artist, album) => {
    const response = await axios.get(`${url}/api/albumInfo`, {
        params: {
            artist: artist,
            album: album
        }
    })
    return response
}

const fetchSimilarArtists = async (artist, limit) => {
    const response = await axios.get(`${url}/api/similar`, {
        params: {
            artist: artist,
            limit: limit
        }
    })
    return response
}

const fetchArtistInfo = async (artist) => {
    const response = await axios.get(`${url}/api/artistInfo`, {
        params: {
            artist: artist
        }
    })
    return response
}

export default  { 
    findAlbums,
    fetchAlbumInfo,
    fetchSimilarArtists,
    fetchArtistInfo
}