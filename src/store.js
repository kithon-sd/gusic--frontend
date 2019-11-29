import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import paginationReducer from './reducers/paginationReducer';
import albumListReducer from './reducers/albumListReducer';

const reducer = combineReducers({
    data: albumListReducer,
    pagination: paginationReducer
})

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

export default store