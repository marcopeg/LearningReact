import React from 'react'
import { injectReducer } from 'redux-injector'

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

        if (!this.props.isReady) {
            this.props.promise.then(onRouteLoad)
        }
    }

    componentWillUnmount () {
        console.log('unmount')
        this.has_unmounted = true
    }

    render () {
        let { fallback: Fallback } = this.props
        let { isReady, component: Component } = this.state
        return React.createElement(isReady ? Component : Fallback)
    }
}

/**
 *
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

                Object.keys(route.reducers).map(key => {
                    injectReducer(key, route.reducers[key])
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

export const configSyncRoute = route => {
    let hasFired = false
    return props => {
        if (!hasFired) {
            Object.keys(route.reducers).map(key => {
                injectReducer(key, route.reducers[key])
            })
        }
        return React.createElement(route.component)
    }
}
