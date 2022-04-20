import { ADD_DOG, ADD_DOG_SAGA } from "../types/dog.types";


export const addDog = (url) => ({
  type: ADD_DOG,
  payload: url,
})

export const addDogSaga = () => ({
  type: ADD_DOG_SAGA,
})
