import { call, put, takeEvery } from 'redux-saga/effects'
import { ADD_DOG_SAGA } from '../types/dog.types';
import axios from 'axios'
import {addDog} from '../ac/dogAC' 

const getDogFromServer=()=>{
 return axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response=>response.data.message)
}

function* dogWorker() {
   try {
      const dog = yield call(getDogFromServer);
      yield put(addDog(dog));
   } catch (e) {
      yield put(addDog('error'));   
   }
}


function* getDogWatcher() {
  yield takeEvery(ADD_DOG_SAGA, dogWorker);  //watcher
}


export default getDogWatcher;
