import * as React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import ProtectedRouteComponent from './ProtectedRouteComponent'

export const renderRoute = route => props =>
    <ProtectedRouteComponent {...props}
        ProtectedComponent={route.component}
        FallbackComponent={route.fallbackComponent}
        redirectTo={route.redirectTo}
        shouldRender={route.shouldRender} />

export const ProtectedRoute = ({
    component,
    shouldRender,
    fallbackComponent,
    redirectTo,
    ...routeProps
}) => <Route {...routeProps} render={renderRoute({
        component,
        shouldRender,
        fallbackComponent,
        redirectTo
    })} />

ProtectedRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]).isRequired,
    shouldRender: PropTypes.func.isRequired,
    fallbackComponent: PropTypes.element,
    redirectTo: PropTypes.string
}

export default ProtectedRoute
