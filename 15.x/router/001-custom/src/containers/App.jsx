import * as React from 'react'

// Custom routing components
import Route from '../router/Route'
import Link from '../router/Link'

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
                    <Route path='/page1' component={Page1} />
                    <Route path='/page2' component={Page2} />
                    <Route path='/about' component={PageX} title={'About Us'} content={'lorem ipsum...'} />
                    <Route path='/who' component={DynamicPage} title={'Who Are We?'} />
                </div>
            </div>
        )
    }
}

export default App
