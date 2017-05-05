
const sagas = [
    require('./random-name')
]

export const configSagas = reduxSaga =>
    sagas.map(saga => reduxSaga.run(saga.default))

export default configSagas
