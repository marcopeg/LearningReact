
import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * react-redux
 */
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index'

// redux-sagas injector and redux-injector by
// https://github.com/GuillaumeCisco/redux-sagas-injector
import { createInjectSagasStore as createStore, sagaMiddleware as reduxSaga } from 'redux-sagas-injector'
import { configSagas, rootSaga } from './sagas'

let store
const initialState = window.REDUX_INITIAL_STATE || {}

// -- Production --
if (process.env.NODE_ENV === 'production') {
    const middlewares = applyMiddleware(reduxThunk, reduxSaga)
    store = createStore(reducers, rootSaga, initialState, middlewares)
    configSagas(reduxSaga)

// -- Development --
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || require('redux').compose
    const middlewares = composeEnhancers(applyMiddleware(reduxThunk, reduxSaga))
    store = createStore(reducers, rootSaga, initialState, middlewares)
    configSagas(reduxSaga)
    window.store = store
}



/**
 * react-router
 */

import { BrowserRouter as Router, Route } from 'react-router-dom'


/**
 * material-ui
 * (http://www.material-ui.com/)
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


/**
 * app
 */
import App from './containers/App'

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router>
                <Route component={App} />
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('react-app')
)
