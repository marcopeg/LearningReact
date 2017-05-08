
import AboutPage from './AboutPage'
import about from './about-reducer'
import aboutSaga from './about-saga'

export const route = {
    component: AboutPage,
    reducers: { about },
    sagas: { aboutSaga }
}

export default route
