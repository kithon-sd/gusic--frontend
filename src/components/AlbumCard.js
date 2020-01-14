import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
display: flex;
border-right: 1px solid #00e676;
width: 50%
`

const AlbumDataWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 50px;
`

const AlbumName = styled(Link)`
font-size: 40px;
color: #aaa;
text-decoration:none
&:hover {
    color: #00e676;
    text-decoration: underline;
}
`

const AlbumArtist = styled(Link)`
font-size: 24px;
color: #aaa;
text-decoration:none
&:hover {
    color: #00e676;
    text-decoration: underline;
}
`

const AlbumCard = props => {
    const {
        cover,
        name,
        artist
    } = props

    return (
        <CardWrapper>
            <img src={cover} alt={name} />
            <AlbumDataWrapper>
                <AlbumName to={`/music/${encodeURIComponent(artist)}/${encodeURIComponent(name)}`}>{name}</AlbumName>
                <AlbumArtist to={`/music/${encodeURIComponent(artist)}`}>{artist}</AlbumArtist>
            </AlbumDataWrapper>
        </CardWrapper>
    )
}

export default AlbumCard