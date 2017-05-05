// require("babel-core/register");
// require("babel-polyfill");

import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * react-redux
 */
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import createReduxSagaMiddleware from 'redux-saga'
import reducers from './reducers/index'
import configSagas from './sagas'

let store
const initialState = window.REDUX_INITIAL_STATE || {}
const reduxSaga = createReduxSagaMiddleware()

// -- Production --
if (process.env.NODE_ENV === 'production') {
    const middlewares = applyMiddleware(reduxThunk, reduxSaga)
    store = createStore(reducers, initialState, middlewares)
    configSagas(reduxSaga)
    window.store = store

// -- Development --
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || require('redux').compose
    const middlewares = composeEnhancers(applyMiddleware(reduxThunk, reduxSaga))
    store = createStore(reducers, initialState, middlewares)
    configSagas(reduxSaga)
    window.store = store
}



/**
 * app
 */
import App from './containers/App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-app')
)
