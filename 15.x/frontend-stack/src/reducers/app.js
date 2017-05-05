
export const SET_NAME = 'setName@app'

export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

export const initialState = {
    name: 'react fr stack'
}

export const actionHandlers = {
    [SET_NAME]: (state, action) => ({
        ...state,
        name: action.payload
    })
}

export const app = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default app
