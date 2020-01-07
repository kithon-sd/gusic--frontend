import axios from 'axios'

export const findAlbums = async (query, page, limit) => {
    const response = await axios.get(`/api/album/search`, {
        params: {
            query: query,
            page: page,
            limit: limit
        }
    })
    return response
}

export const fetchAlbumInfo = async (artist, album) => {
    const response = await axios.get(`/api/album/getInfo`, {
        params: {
            artist: artist,
            album: album
        }
    })
    return response
}

export const fetchSimilarArtists = async (artist, limit) => {
    const response = await axios.get(`/api/artist/getSimilar`, {
        params: {
            artist: artist,
            limit: limit
        }
    })
    return response
}

export const fetchArtistInfo = async (artist) => {
    const response = await axios.get(`/api/artist/getInfo`, {
        params: {
            artist: artist
        }
    })
    return response
}

export const fetchApiKey = async () => {
    const response = await axios.get(`/api/user/fetchApiKey`)
    return response
}

export const getSessionKey = async (token) => {
    const response = await axios.get(`/api/auth/getSession`, {
        params: {
            token: token
        }
    })
    return response
}

export const fetchArtistTopAlbums = async (artist, page, limit) => {
    const response = await axios.get(`/api/artist/getTopAlbums`, {
        params: {
            artist: artist,
            limit: limit,
            page: page
        }
    })
    return response
}

export const addToLoved = async (sessionKey, data) => {
    try {
        const response = await axios.post(`/api/track/love`, {
            data: {
                artist: data.artist,
                track: data.track,
                sessionKey: sessionKey
            }
        })
        return response.status
    }
    catch(err) {
        return err.response
    }
}

export const removeFromLoved = async (sessionKey, data) => {
    try {
        const response = await axios.post(`/api/track/unlove`, {
            data: {
                artist: data.artist,
                track: data.track,
                sessionKey: sessionKey
            }
        })
        return response.status
    }
    catch(err) {
        return err.response
    }
}

export const getLovedTracks = async (user) => {
    try {
        const response = await axios.get(`/api/user/getLovedTracks`, {
            params: {
                user: user
            }
        })
        return response.data
    }
    catch(err) {
        console.error(err)
    }
}

export default  { 
    findAlbums,
    fetchAlbumInfo,
    fetchSimilarArtists,
    fetchArtistInfo,
    fetchArtistTopAlbums,
    addToLoved,
    removeFromLoved,
    getLovedTracks
}