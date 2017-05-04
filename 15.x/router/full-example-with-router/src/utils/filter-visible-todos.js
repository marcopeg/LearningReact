
const activeLabelsReducer = (list, item) => {
    if (item.is_active) {
        list.push(item.value)
    }
    return list
}

export const filterVisibleTodos = (todos, filter) => {
    const activeLabels = filter.reduce(activeLabelsReducer, [])

    return activeLabels.length === 0 ? todos : todos.filter(todo => {
        return activeLabels.some(label => todo.labels.indexOf(label) !== -1)
    })
}
