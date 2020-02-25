import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
const SearchBar = styled.input`{
    width: 100%;
    border: 1px solid ${props => props.theme.secondary.regular};
    padding: 5px;
    height: 20px;
    outline: none;
    background-color: ${props => props.theme.primary.dark};
    color: ${props => props.theme.text.special};
    font-size: 16px;
    &:focus {
        outline: 3px solid ${props => props.theme.secondary.dark};
    }
`

const Search = (props) => {
    const {
        handleSubmit,
        handleChange,
        query
    } = props


    return (
        <Wrapper>
        <form onSubmit={handleSubmit}>
            <SearchBar
            value={query}
            onChange={handleChange}
            placeholder='Enter an album title'
            />
        </form>
        </Wrapper>

    )
}

export default Search