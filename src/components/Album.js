import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../reducers/albumListReducer'

const Album = (props) => {
    const { albumName, albumArtist } = props.match.params
    const { album, similarArtists } = props
    
    useEffect(() => {
        props.fetchAlbum(albumArtist, albumName)
    }, [])

    if (!album) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>
            </div>

            {album.wiki ?
            <p>{album.wiki.summary}</p>
            : <p>No description available for this album</p>
            }

            <div>
                <h3>Genres</h3>
                <ul>
                    {album.tags.tag.map(genre => (
                        <li key={genre.url}>
                            {genre.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Tracklist</h3>
                <ul>
                    {album.tracks.track.map(track => (
                        <li key={track.url}>
                            {track.name}
                        </li>
                    ))}
                </ul>
            </div>

            <h3>Similar artists</h3>
            <ul>
                {similarArtists.map(artist => (
                    <li key={artist.url}>
                        {artist.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       album: state.data.albumData.album,
       similarArtists: state.data.albumData.similarArtists
    }
}

const mapDispatchToProps = {
    fetchAlbum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)

