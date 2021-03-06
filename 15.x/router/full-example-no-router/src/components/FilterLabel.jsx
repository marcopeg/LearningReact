import * as React from 'react'
import * as PropTypes from 'prop-types'

import Badge from 'react-bootstrap/lib/Badge'

export const FilterLabel = ({ value, is_active, handler }) =>
    <Badge style={getBadgeStyle(is_active)} onClick={() => handler(value)}>
        {value}
    </Badge>

FilterLabel.propTypes = {
    value: PropTypes.string.isRequired,
    is_active: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export const getBadgeStyle = is_active => ({
    backgroundColor: is_active ? '#069' : '#666',
    marginRight: 5
})

export default FilterLabel
