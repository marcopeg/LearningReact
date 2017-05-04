import * as React from 'react'
import * as PropTypes from 'prop-types'

import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import FilterLabel from './FilterLabel'
import FilterStatus from './FilterStatus'

export const Filter = ({ labels, onToggleLabel, onToggleStatus }) =>
    <Row style={getBoxStyle()}>
        <Col xs={3}>
            <FilterStatus handler={onToggleStatus} />
        </Col>
        <Col xs={9} className="text-right">
            {labels.map(label => <FilterLabel {...label} handler={onToggleLabel} key={label.value} />)}
        </Col>
    </Row>

Filter.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleLabel: PropTypes.func.isRequired,
    onToggleStatus: PropTypes.func.isRequired
}

export const getBoxStyle = () => ({
    marginTop: 5,
    marginBottom: 5
})

export default Filter
