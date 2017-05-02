import * as React from 'react'

export const makeClickHandler = to => e => {
    e.preventDefault()
    e.stopPropagation()
    history.pushState({}, '', to)
}

export const Link = ({ to, children }) => (
    <a href={to} onClick={makeClickHandler(to)}>{children}</a>
)

export default Link
