import axios from 'axios'

const url = 'http://localhost:3003'

const findAlbums = async (query, page, limit) => {
    const response = await axios.get(url, {
        params: {
            query: query,
            page: page,
            limit: limit
        }
    })
    return response
}

const fetchAlbumInfo = async (artist, album) => {
    const response = await axios.get(`${url}/api/album/info`, {
        params: {
            artist: artist,
            album: album
        }
    })
    return response
}

const fetchSimilarArtists = async (artist, limit) => {
    const response = await axios.get(`${url}/api/album/similarArtists`, {
        params: {
            artist: artist,
            limit: limit
        }
    })
    return response
}

const fetchArtistInfo = async (artist) => {
    const response = await axios.get(`${url}/api/artist/info`, {
        params: {
            artist: artist
        }
    })
    return response
}

const fetchArtistTopAlbums = async (artist, page, limit) => {
    const response = await axios.get(`${url}/api/artist/topAlbums`, {
        params: {
            artist: artist,
            limit: limit,
            page: page
        }
    })
    return response
}

export default  { 
    findAlbums,
    fetchAlbumInfo,
    fetchSimilarArtists,
    fetchArtistInfo,
    fetchArtistTopAlbums
}