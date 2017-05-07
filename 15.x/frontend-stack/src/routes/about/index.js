
import { configAsyncRoute } from '../async-route'

// export default configAsyncRoute(() => import('./route'))

export default configAsyncRoute(() => new Promise(resolve => {
    let p = import('./async-route')
    setTimeout(() => resolve(p), 2000)
}))
