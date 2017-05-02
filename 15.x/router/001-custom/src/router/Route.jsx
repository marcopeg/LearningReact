import * as React from 'react'

// Extend browser's history to so be able to hook in
(function(history) {
    let listeners = [];

    history.listen = fn => {
        let ticket = {
            active: true,
            fn
        }
        listeners.push(ticket)
        return ticket
    }

    let pushState = history.pushState
    history.pushState = function(state) {
        listeners.filter($ => $.active).forEach($ => $.fn.apply(null, arguments))
        return pushState.apply(history, arguments)
    }
})(window.history)

// Route Component
export class Route extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            location: window.location.pathname
        }
    }

    componentDidMount () {
        this._pushStateTicket = window.history.listen((state, a, location) => {
            this.setState({ location })
        })
    }

    componentWillUnmount () {
        this._pushStateTicket.active = false
        this._pushStateTicket.fn = null
    }

    render () {
        let { location } = this.state
        let { path, component, ...props } = this.props

        // pretty basic matching mechanism
        // here we can implement regexp and likely fancy stuff
        let isActive = path === location

        return isActive ? <this.props.component path={path} {...props} /> : null
    }
}

export default Route
