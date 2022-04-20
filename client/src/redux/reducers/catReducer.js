import { ADD_CAT } from "../types/cat.types";


const catReducer = (state='', action) => {
  const { type, payload }=action
switch (type) {
  case ADD_CAT:
     return payload;
  default:
    return state;
}
}


export default catReducer;
