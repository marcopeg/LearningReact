import * as React from 'react'
import Link from '../router/Link'

export class DynamicPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            content: ''
        }
    }

    // Simulate ajax loading
    componentDidMount () {
        setTimeout(() => this.setState({
            isLoading: false,
            content: 'lorem ipsum...'
        }), 1000)
    }

    render () {
        let { title } = this.props
        let { isLoading, content } = this.state

        content = isLoading ? <div>loading...</div> : content

        return (
            <div>
                <h1>{title}</h1>
                <div>{content}</div>
                <hr />
                <Link to={'/'}>Go back</Link>
            </div>
        )
    }
}

export default DynamicPage
