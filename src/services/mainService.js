import axios from 'axios'
const sessionKey = window.localStorage.getItem('gusic_sessionKey')

const url = 'http://localhost:3003'

const findAlbums = async (query, page, limit) => {
    const response = await axios.get(`${url}/api/album/search`, {
        params: {
            query: query,
            page: page,
            limit: limit
        }
    })
    return response
}

const fetchAlbumInfo = async (artist, album) => {
    const response = await axios.get(`${url}/api/album/getInfo`, {
        params: {
            artist: artist,
            album: album
        }
    })
    return response
}

const fetchSimilarArtists = async (artist, limit) => {
    const response = await axios.get(`${url}/api/artist/getSimilar`, {
        params: {
            artist: artist,
            limit: limit
        }
    })
    return response
}

const fetchArtistInfo = async (artist) => {
    const response = await axios.get(`${url}/api/artist/getInfo`, {
        params: {
            artist: artist
        }
    })
    return response
}

const fetchArtistTopAlbums = async (artist, page, limit) => {
    const response = await axios.get(`${url}/api/artist/getTopAlbums`, {
        params: {
            artist: artist,
            limit: limit,
            page: page
        }
    })
    return response
}

export const addLovedTrack = async (artist, track, sessionKey) => {
    try {
        const response = await axios.post(`${url}/api/track/love`, {
            data: {
                artist: artist,
                track: track,
                sessionKey: sessionKey
            }
        })
        return response.status
    }
    catch(err) {
        return(err.response)
    }
}

export default  { 
    findAlbums,
    fetchAlbumInfo,
    fetchSimilarArtists,
    fetchArtistInfo,
    fetchArtistTopAlbums,
    addLovedTrack
}