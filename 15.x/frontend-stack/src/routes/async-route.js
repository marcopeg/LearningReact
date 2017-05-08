import React from 'react'
import { injectReducer } from 'redux-injector'
import { injectSaga } from 'redux-sagas-injector'

const DefaultComponent = () => <div>async component</div>
const DefaultFallback = () => <div>async loading</div>

class AsyncRouteWrapper extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isReady: this.props.isReady,
            component: this.props.component
        }
    }

    // need to check whether the component has unmounted
    componentWillMount () {
        const onRouteLoad = route => {
            if (this.has_unmounted) {
                return
            }

            route = route.default ? route.default : route
            this.setState({
                isReady: true,
                component: route.component
            })
        }

        if (!this.props.isReady && !this.has_unmounted) {
            this.props.promise.then(onRouteLoad)
        }
    }

    componentWillUnmount () {
        this.has_unmounted = true
    }

    render () {
        let { fallback: Fallback } = this.props
        let { isReady, component: Component } = this.state
        return React.createElement(isReady ? Component : Fallback)
    }
}

/**
 * Async Route Definition
 * allows to dynamically inject reducers and sagas into the application
 */
export const configAsyncRoute = (loadRouteChunk, fallback = DefaultFallback) => {
    let isReady = false
    let promise = null
    let component = DefaultComponent

    // Route{render} handler that is given to react-router
    return props => {
        if (promise === null) {
            promise = loadRouteChunk()

            promise.then(route => {
                isReady = true
                route = route.default ? route.default : route
                component = route.component

                // inject reducers
                Object.keys(route.reducers || {}).map(key => {
                    injectReducer(key, route.reducers[key])
                })

                // inject sagas
                Object.keys(route.sagas || {}).map(key => {
                    injectSaga(key, route.sagas[key])
                })
            })
        }

        return React.createElement(AsyncRouteWrapper, {
            isReady,
            promise,
            component,
            fallback
        })
    }
}

/**
 * Synchronous Route Definition
 * at the moment it triggers a state update warning if we try to
 * inject new reducers. This is not a problem as synchronous routes should
 * not define reducers or sagas by themselves
 */
export const configSyncRoute = (route, fallback = DefaultFallback) => {
    return props => {
        return React.createElement(route.component)
    }
}
