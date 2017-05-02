import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const PageX = ({title, content}) => (
    <div>
        <h1>{title}</h1>
        <div>{content}</div>
        <hr />
        <Link to={'/'}>Go back</Link>
    </div>
)

PageX.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default PageX
