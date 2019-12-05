import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import paginationReducer from './reducers/paginationReducer';
import albumListReducer from './reducers/albumListReducer';
import artistReducer from './reducers/artistReducer';

const reducer = combineReducers({
    data: albumListReducer, // rewrite into albumdata
    artist: artistReducer,
    pagination: paginationReducer
})

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

export default store