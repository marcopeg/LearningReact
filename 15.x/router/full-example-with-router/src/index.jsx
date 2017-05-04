import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('react-app')
)
