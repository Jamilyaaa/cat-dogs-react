import { DECREMENT, INCREMENT } from "../types/counter.types";


export const decrement = () => ({
  type: DECREMENT,
})


export const increment = () =>({
  type: INCREMENT,
})
