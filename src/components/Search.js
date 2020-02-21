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
    border: 1px solid #00e676;
    padding: 5px;
    height: 20px;
    outline: none;
    background-color: ${props => props.theme.primary.dark};
    color: #fff;
    font-size: 16px;
    &:focus {
        -webkit-box-shadow: 10px -5px 26px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px -5px 26px 1px rgba(0,0,0,0.75);
         box-shadow: 10px -5px 26px 1px rgba(0,0,0,0.75);
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