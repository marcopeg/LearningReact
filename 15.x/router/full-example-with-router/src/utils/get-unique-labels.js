
const labelsReducer = (labels, todo) => {
    const isNewLabel = label => labels.indexOf(label) === -1
    const newLabels = todo.labels.filter(isNewLabel)
    return labels.concat(newLabels)
}

const labelsTransform = (activeLabels) => (label) => ({
    value: label,
    is_active: activeLabels.indexOf(label) !== -1
})

export const getUniqueLabels = (todos, activeLabels) => {
    return todos
        .reduce(labelsReducer, [])
        .map(labelsTransform(activeLabels))
}
