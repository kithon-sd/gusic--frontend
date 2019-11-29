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

const fetchAlbumInfo = async (id) => {
    const response = await axios.get(url, {
        params: {
            id: id
        }
    })
    return response
}

export default  { 
    findAlbums,
    fetchAlbumInfo
}