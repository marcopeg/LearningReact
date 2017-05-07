
export const SET_NAME = 'setName@about'

export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

export const initialState = {
    name: 'about-page'
}

export const actionHandlers = {
    [SET_NAME]: (state, action) => ({
        ...state,
        name: action.payload
    })
}

export const about = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default about
