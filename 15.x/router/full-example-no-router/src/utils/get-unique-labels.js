
const labelsReducer = (labels, todo) => {
    const isNewLabel = label => labels.indexOf(label) === -1
    const newLabels = todo.labels.filter(isNewLabel)
    return labels.concat(newLabels)
}

export const getUniqueLabels = todos => todos.reduce(labelsReducer, [])
