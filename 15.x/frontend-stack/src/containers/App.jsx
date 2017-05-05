// @flow

import React from 'react'
import css from './App.css'
import styl from './App.styl'

export default class App extends React.Component {
    render () {
        return (
            <div>
                <span className={css.foo}>React</span>
                <span className={styl.faa}>App</span>
            </div>
        )
    }
}
