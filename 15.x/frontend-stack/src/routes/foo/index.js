
import { configSyncRoute, configAsyncRoute } from '../async-route'

// import FooPage from './FooPage'

// import route from './route'
// export default configSyncRoute(route)

export default configAsyncRoute(() => import('./route'))
