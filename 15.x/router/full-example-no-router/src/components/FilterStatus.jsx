import * as React from 'react'
import * as PropTypes from 'prop-types'

import Badge from 'react-bootstrap/lib/Badge'

export const FilterStatus = ({ value, is_active, handler }) =>
    <div>
        foo
    </div>

FilterStatus.propTypes = {
    value: PropTypes.string.isRequired,
    is_active: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export const getBadgeStyle = is_active => ({
    backgroundColor: is_active ? '#069' : '#666',
    marginRight: 5
})

export default FilterStatus
