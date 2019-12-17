import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './components/Main'
import SearchForm from './components/SearchForm'
import Album from './components/Album'
import Artist from './components/Artist'
import Auth from './components/Auth';
import Backlog from './components/Backlog'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/search' component={SearchForm} />
      <Route path='/music/:albumArtist/:albumName' component={Album} />
      <Route exact path='/music/:artist' component={Artist} />
      <Route path='/auth' component={Auth} />
      <Route path='/backlog' component={Backlog} />
    </Router>
  )
}
export default App;
