import * as React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

export const ProtectedRouteComponent = ({
    ProtectedComponent,
    FallbackComponent,
    redirectTo,
    shouldRender,
    ...props
}) => {
    if (shouldRender(props)) {
        return <ProtectedComponent {...props} />
    } else if (FallbackComponent) {
        return <FallbackComponent {...props} />
    } else if (redirectTo) {
        return <Redirect to={{
            pathname: redirectTo,
            state: { from: props.location }
        }} />
    } else {
        return null
    }
}

ProtectedRouteComponent.propTypes = {
    ProtectedComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]).isRequired,
    shouldRender: PropTypes.func.isRequired,
    FallbackComponent: PropTypes.element,
    redirectTo: PropTypes.string
}

export default ProtectedRouteComponent
