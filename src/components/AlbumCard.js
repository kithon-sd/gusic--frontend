import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// not sure what this does but dont remove it
const Noway = styled.div` 
min-width: 40%;
@media (max-width: 800px) {
    width: 100%;
}
`

const CardWrapper = styled.div` 
display: flex;
border-right: 1px solid ${props => props.theme.secondary.regular};
margin-bottom: 30px;
@media (max-width: 768px) {
    margin-left: 10px;
}
`

const AlbumDataWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 20px;
margin-right: 20px;

@media (max-width: 768px) {
}
`

const AlbumName = styled(Link)`
font-size: 40px;
color: ${props => props.theme.text.black};
text-decoration:none;
&:hover {
    color: ${props => props.theme.secondary.regular};
    text-decoration: underline;
}

@media (max-width: 767px) {
    font-size: 2em;
}
`

const AlbumArtist = styled(Link)`
font-size: 24px;
color: ${props => props.theme.text.black};
text-decoration:none;
&:hover {
    color: ${props => props.theme.secondary.regular};
    text-decoration: underline;
}

@media (max-width: 767px) {
    font-size: 1.5em;
}
`

const StyledImg = styled.img`
height: 100%;

@media (max-width: 768px) {
    height: 30%;
    width: 30%;
}
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