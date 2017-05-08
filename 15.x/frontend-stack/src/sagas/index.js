
const sagas = [
    require('./random-name')
]

export const configSagas = reduxSaga => {
    sagas.map(saga => reduxSaga.run(saga.default))
}

// needed by the injector package
// (https://github.com/GuillaumeCisco/redux-sagas-injector)
export function* rootSaga () {}

export default configSagas
