import * as React from 'react'
import Grid from 'react-bootstrap/lib/Grid'

import { todos } from '../todos.json'
import { getUniqueLabels } from '../utils/get-unique-labels'

import TodosList from '../components/TodosList'
import Filter from '../components/Filter'

class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            todos,
            labels: getUniqueLabels(todos).map(label => ({
                value: label,
                is_active: false
            }))
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

    onToggleStatus (toggleStatus) {
        console.log('toggle status', toggleStatus)
    }

    render () {
        let { todos, labels } = this.state
        let onToggleLabel = this.onToggleLabel.bind(this)
        let onToggleStatus = this.onToggleStatus.bind(this)

        const labelsReducer = (list, item) => {
            if (item.is_active) {
                list.push(item.value)
            }
            return list
        }

        const activeLabels = labels.reduce(labelsReducer, [])

        if (activeLabels.length) {
            todos = todos.filter(todo => {
                return activeLabels.some(label => todo.labels.indexOf(label) !== -1)
            })
        }

        return (
            <Grid>
                <h2>Remember the Milk</h2>
                <Filter labels={labels} onToggleLabel={onToggleLabel} onToggleStatus={onToggleStatus} />
                <TodosList items={todos} />
                <Filter labels={labels} onToggleLabel={onToggleLabel} onToggleStatus={onToggleStatus} />
            </Grid>
        )
    }
}

export default App
