import * as React from 'react'
import { Route } from 'react-router-dom'
import Grid from 'react-bootstrap/lib/Grid'

import { todos } from '../todos.json'
import { getUniqueLabels } from '../utils/get-unique-labels'
import { filterVisibleTodos } from '../utils/filter-visible-todos'
import queryLabels from '../utils/query-labels'
import arrayItemToggle from '../utils/array-item-toggle'

import TodosList from '../components/TodosList'
import Filter from '../components/Filter'


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todos,
            labels: getUniqueLabels(todos, queryLabels.parse(this.props.location.search))
        }
    }

    onToggleLabel (toggleValue) {
        const activeLabels = arrayItemToggle(queryLabels.parse(this.props.location.search), toggleValue)

        this.props.history.push({
            pathname: '/',
            search: queryLabels.stringify(activeLabels)
        })

        this.setState({
            labels: getUniqueLabels(this.state.todos, activeLabels)
        })
    }

    render () {
        let { todos, labels } = this.state
        let onToggleLabel = this.onToggleLabel.bind(this)

        return (
            <Grid>
                <h2>Remember the Milk</h2>
                <Filter labels={labels} onToggleLabel={onToggleLabel} />
                <TodosList items={filterVisibleTodos(todos, labels)} />
                <Filter labels={labels} onToggleLabel={onToggleLabel} />
            </Grid>
        )
    }
}

export default App
