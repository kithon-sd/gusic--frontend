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
    const response = await axios.get(`${url}/placeholder`, {
        params: {
            artist: artist,
            album: album
        }
    })
    return response
}

export default  { 
    findAlbums,
    fetchAlbumInfo
}