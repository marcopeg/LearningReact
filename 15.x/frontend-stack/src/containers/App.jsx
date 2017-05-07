// @flow

import React from 'react'
import { connect } from 'react-redux'

import css from './App.css'
import styl from './App.styl'

import HomePage from '../components/HomePage'
import PageX from '../components/PageX'
import renderAboutRoute from '../routes/about'
import renderFooRoute from '../routes/foo'


import { Route } from 'react-router-dom'

export const App = ({ app, history }) =>
    <div>
         <span className={css.foo}>React</span>
         <span className={styl.faa}>App</span>
         {app.name}
         <hr />
         <button onClick={() => history.push('/')}>home</button>
         <button onClick={() => history.push('foo')}>foo</button>
         <button onClick={() => history.push('about')}>about</button>
         <button onClick={() => history.push('foos')}>foo</button>
         <hr />
         <Route exact path={'/'} component={HomePage} />
         <Route path={'/foo'} render={() => <PageX title='foo' />} />
         <Route path={'/about'} render={renderAboutRoute} />
         <Route path={'/foos'} render={renderFooRoute} />
    </div>

export default connect(s => s)(App)
