
import { configAsyncRoute } from '../async-route'
export default configAsyncRoute(() => import('./route'))

// DEMO WITH SLOW DELAY
// export default configAsyncRoute(() => new Promise(resolve => {
//     let p = import('./route')
//     setTimeout(() => resolve(p), 2000)
// }))
