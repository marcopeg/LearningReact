
import { configSyncRoute } from '../async-route'

import FooPage from './FooPage'

export default configSyncRoute({
    component: FooPage,
    reducers: {
        foo: (state = {a:1}, action) => state,
        ai: (state = 123) => state
    }
})
