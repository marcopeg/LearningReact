import * as React from 'react'
import { Route, Link } from 'react-router-dom'

import HomePage from '../components/HomePage'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import PageX from '../components/PageX'
import DynamicPage from './DynamicPage'

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React App</h1>
                <div>
                    <Link to={'/'}>Home</Link>
                    {' | '}
                    <Link to={'/page1'}>page1</Link>
                    {' | '}
                    <Link to={'/page2'}>page2</Link>
                    {' | '}
                    <Link to={'/about'}>About Us</Link>
                    {' | '}
                    <Link to={'/who'}>Who are we?</Link>
                </div>
                <hr />
                <div>
                    <Route path='/' component={HomePage} />
                    <Route path='/page1' component={Page1} />
                    <Route path='/page2' component={Page2} />
                    <Route path='/about' render={props => <PageX {...props} title={'About Us'} content={'lorem ipsum...'} />} />
                    <Route path='/who' render={props => <DynamicPage {...props} title={'Who Are We?'} />} />
                </div>
            </div>
        )
    }
}

export default App
