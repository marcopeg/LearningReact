import * as React from 'react'
import * as PropTypes from 'prop-types'

import FilterLabel from './FilterLabel'
import FilterStatus from './FilterStatus'

export const Filter = ({ labels, onToggleLabel }) =>
    <div className="text-right" style={getFilterStyle()}>
        {labels.map(label => <FilterLabel {...label} handler={onToggleLabel} key={label.value} />)}
    </div>

Filter.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleLabel: PropTypes.func.isRequired
}

export const getFilterStyle = () => ({
    marginTop: 5,
    marginBottom: 5
})

export default Filter
