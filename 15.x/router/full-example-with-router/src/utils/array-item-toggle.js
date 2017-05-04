
export const arrayItemToggle = (list, item) => {
    if (list.indexOf(item) === -1) {
        list.push(item)
    } else {
        list = list.filter($ => $ !== item)
    }
    return list
}

export default arrayItemToggle
