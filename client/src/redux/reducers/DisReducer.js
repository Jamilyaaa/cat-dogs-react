import { DECREMENT } from "../types/counter.types";


const disReducer=(state=0, action)=>{
  const {type } = action;
  switch (type) {
    case DECREMENT:
      return state -1;
    default:
      return state;
  }
  }
  
  export default disReducer;
