import { ADD_CAT } from "../types/cat.types";


export const addCat = (url) => ({
  type: ADD_CAT,
  payload: url,
})
