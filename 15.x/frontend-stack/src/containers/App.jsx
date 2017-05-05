// @flow

import React from 'react'
import { connect } from 'react-redux'

import css from './App.css'
import styl from './App.styl'

export const App = ({ app }) =>
    <div>
         <span className={css.foo}>React</span>
         <span className={styl.faa}>App</span>
         {app.name}
    </div>

export default connect(s => s)(App)
