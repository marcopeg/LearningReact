import * as React from 'react'
import * as PropTypes from 'prop-types'

export const TodoItemLabels = ({ labels }) =>
    <span className='pull-right' style={getLabelsStyle()}>
        {labels.join(', ')}
    </span>

TodoItemLabels.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
}

export const getLabelsStyle = () => ({
    fontStyle: 'italic',
    fontSize: '0.85em'
})

export default TodoItemLabels
