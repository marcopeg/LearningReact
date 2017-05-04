import * as React from 'react'
import * as PropTypes from 'prop-types'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import TodoItem from './TodoItem'

export const TodosList = ({ items }) =>
    <ListGroup>
        {items.map(todo => <TodoItem {...todo} key={todo.id}/>)}
    </ListGroup>

TodosList.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodosList
