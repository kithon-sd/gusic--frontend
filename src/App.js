import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import SearchForm from './components/SearchForm'
import Album from './components/Album'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/search' component={SearchForm} />
      <Route path='/music/:albumArtist/:albumName' component={Album} />
    </Router>
  )
}
//single album page needs to be in format of url/artist/album
export default App;
