
import FooPage from './FooPage'

export const route = {
    component: FooPage,
    reducers: {
        foo: (state = {a:1}, action) => state,
        ai: (state = 123) => state
    }
}

export default route
