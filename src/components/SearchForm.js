import React, { useState } from 'react'
import Album from './Album'
import Search from './Search'

import axios from 'axios'

const SearchForm = () => {
    const [albums, setAlbums] = useState({ albummatches: {
        album: []
    }})

    const fetchAlbums = async (query) => {
        const response = await axios.get('http://localhost:3003', {
            params: {
                query: query
            }
        })
        setAlbums(response.data.results)
    }


    return (
        <div>
        <Search
        fetchAlbums={fetchAlbums}
        />
        {Object.keys(albums.albummatches).length === 0 ? <div /> : <Album albums={albums.albummatches.album} />}
        </div>

    )
}

export default SearchForm