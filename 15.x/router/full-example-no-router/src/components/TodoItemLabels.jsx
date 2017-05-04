import * as React from 'react'
import * as PropTypes from 'prop-types'

import Badge from 'react-bootstrap/lib/Badge'

export const TodoItemLabels = ({ labels }) =>
    <Badge pullRight>
        {labels.join(', ')}
    </Badge>

TodoItemLabels.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TodoItemLabels
