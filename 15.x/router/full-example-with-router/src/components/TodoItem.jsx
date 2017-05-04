import * as React from 'react'
import * as PropTypes from 'prop-types'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import TodoItemLabels from './TodoItemLabels'

export const TodoItem = ({ id, todo, is_done, labels }) =>
    <ListGroupItem>
        <span style={getTestStyle(is_done)}>{todo}</span>
        <TodoItemLabels labels={labels} />
    </ListGroupItem>

TodoItem.propTypes = {
    id: PropTypes.number.isRequired
}

export const getTestStyle = is_done => ({
    textDecoration: is_done ? 'line-through' : 'none'
})

export default TodoItem
