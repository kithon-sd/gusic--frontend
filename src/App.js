import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Main from './components/Main'
import SearchForm from './components/SearchForm'
import Album from './components/Album'
import Artist from './components/Artist'
import Auth from './components/Auth';
import Backlog from './components/Backlog'
import Navigation from './components/Navigation'

import Test from './components/test'

const Wrapper = styled.div`
height: 100%;
width: 100%;
background-color: #1b1b1b;
margin: 0;
padding: 0;
`

const App = () => {
  return (
    <Wrapper>
    <Router>
      <Route component={Navigation} />
      <Route exact path='/' component={Main} />
      <Route path='/search' component={SearchForm} />
      <Route path='/music/:albumArtist/:albumName' component={Album} />
      <Route exact path='/music/:artist' component={Artist} />
      <Route path='/auth' component={Auth} />
      <Route path='/backlog' component={Backlog} />
      <Route path='/test' component={Test} />
    </Router>
    </Wrapper>
  )
}
export default App;
