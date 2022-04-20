import axios from 'axios'
import { addCat } from '../ac/catAC'

export const loadCat = () =>async (dispatch) =>{
  dispatch(addCat(''))
  const response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full ')
  const result = await response.data
  if (result[0].height<480 && result[0].width<640){
    dispatch(addCat(result[0].url))
  } else dispatch(loadCat())
}

