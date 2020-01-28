import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Noway = styled.div`
min-width: 40%;
@media (max-width: 800px) {
    width: 100%;
}
`

const CardWrapper = styled.div` 
display: flex;
border-right: 1px solid #00e676;
margin-bottom: 30px;
`

const AlbumDataWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 20px;
margin-right: 20px;
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

const StyledImg = styled.img`
height: 100%;
`

const AlbumCard = props => {
    const {
        cover,
        name,
        artist
    } = props

    return (
        <Noway>
        <CardWrapper>
            <StyledImg src={cover} alt={name} />
            <AlbumDataWrapper>
                <AlbumName to={`/music/${encodeURI(artist)}/${encodeURI(name)}`}>{name}</AlbumName>
                <AlbumArtist to={`/music/${encodeURI(artist)}`}>{artist}</AlbumArtist>
            </AlbumDataWrapper>
        </CardWrapper>
        </Noway>
    )
}

export default AlbumCard