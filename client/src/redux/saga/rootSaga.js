import getDogWatcher from "./dogSaga"
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    getDogWatcher()
  ])
  // code after all-effect
}


//its like rootReducer in array []
