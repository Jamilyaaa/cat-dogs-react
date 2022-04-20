import { ADD_DOG } from "../types/dog.types";



const dogReducer = (state='', action) => {
  const { type, payload }=action
switch (type) {
  case ADD_DOG:
     return payload;
  default:
    return state;
}
}


export default dogReducer;
