
import randomName from './random-name'

export const configSagas = reduxSaga => {
    reduxSaga.run(randomName)
}

export default configSagas
