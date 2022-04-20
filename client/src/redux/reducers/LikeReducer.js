import { INCREMENT } from "../types/counter.types";


const likeReducer=(state=0, action)=>{
  const {type } = action;
  switch (type) {
    case INCREMENT:
      return state +1;
    default:
      return state;
  }
  }
  
  export default likeReducer;
