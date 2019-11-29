import axios from 'axios'

const url = 'http://localhost:3003'

const findAlbums = async (query, offset) => {
    const response = await axios.get(url)
}