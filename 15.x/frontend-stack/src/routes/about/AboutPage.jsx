import React from 'react'
import { connect } from 'react-redux'

export const AboutPage = ({ app, about }) =>
    <div>
        about async component
        <p>{app.name}</p>
        <p>{about.name}</p>
    </div>

export default connect(s => s)(AboutPage)
