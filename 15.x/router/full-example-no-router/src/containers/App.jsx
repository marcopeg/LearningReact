import * as React from 'react'
import Grid from 'react-bootstrap/lib/Grid'

import { todos } from '../todos.json'
import { getUniqueLabels } from '../utils/get-unique-labels'
import { filterVisibleTodos } from '../utils/filter-visible-todos'

import TodosList from '../components/TodosList'
import Filter from '../components/Filter'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todos,
            labels: getUniqueLabels(todos)
        }
    }

    onToggleLabel (toggleValue) {
        let { labels, todos } = this.state

        labels = labels.map(item => {
            if (item.value === toggleValue) {
                item.is_active = !item.is_active
            }
            return item
        })

        this.setState({
            labels
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
