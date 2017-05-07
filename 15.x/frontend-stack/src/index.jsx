
import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * react-redux
 */
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createInjectStore as createStore } from 'redux-injector'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index'

let store
const initialState = window.REDUX_INITIAL_STATE || {}

import createReduxSagaMiddleware from 'redux-saga'
const reduxSaga = createReduxSagaMiddleware()
import configSagas from './sagas'

// -- Production --
if (process.env.NODE_ENV === 'production') {
    const middlewares = applyMiddleware(reduxThunk, reduxSaga)
    store = createStore(reducers, initialState, middlewares)
    configSagas(reduxSaga)

// -- Development --
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || require('redux').compose
    const middlewares = composeEnhancers(applyMiddleware(reduxThunk, reduxSaga))
    store = createStore(reducers, initialState, middlewares)
    configSagas(reduxSaga)
    window.store = store
}



/**
 * react-router
 */

import { BrowserRouter as Router, Route } from 'react-router-dom'


/**
 * app
 */
import App from './containers/App'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('react-app')
)
