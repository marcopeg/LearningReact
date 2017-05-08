import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const timer = value => new Promise(resolve => setTimeout(() => resolve(value), 1000))

function* changeName(action) {
    let a = yield timer(action.payload)
    yield put({type: "setName@about", payload: a});
}

function* mySaga() {
    yield takeEvery('setAboutName', changeName);
}

export default mySaga;
