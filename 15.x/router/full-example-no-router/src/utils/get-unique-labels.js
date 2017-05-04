
const labelsReducer = (labels, todo) => {
    const isNewLabel = label => labels.indexOf(label) === -1
    const newLabels = todo.labels.filter(isNewLabel)
    return labels.concat(newLabels)
}

const labelsTransform = (label) => ({
    value: label,
    is_active: false
})

export const getUniqueLabels = todos => todos.reduce(labelsReducer, []).map(labelsTransform)
