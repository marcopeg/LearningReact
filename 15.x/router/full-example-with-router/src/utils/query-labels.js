import queryString from 'query-string'

export const parse = q => {
    let parsed = queryString.parse(q)
    let labels = parsed['q'] || []
    if (Array.isArray(labels)) {
        return labels
    } else {
        return [ labels ]
    }
}

export const stringify = list => {
    return queryString.stringify({
        q: list
    })
}

export default { parse, stringify }
