import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './components/Main'
import SearchForm from './components/SearchForm'
import Album from './components/Album'
import Artist from './components/Artist'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/search' component={SearchForm} />
      <Route path='/music/:albumArtist/:albumName' component={Album} />
      <Route exact path='/music/:artist' component={Artist} />
    </Router>
  )
}
export default App;
