import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const SearchBar = styled.input`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
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