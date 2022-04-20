import Buttons from "../Buttons/Buttons";
import Picture from "../Picture/Picture";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCat } from "../../redux/thunk/loadCat";


export default function Cat() {
  const dispatch = useDispatch()

  const cat = useSelector(store=>store.cats)

  useEffect(() => {
    dispatch(loadCat())
  }, [])

  const refreshCat = (e) => {
    // e.preventDefault()
    dispatch(loadCat())
  }
  
  return (
<>

<Picture url={cat}/>
<Buttons refresh={refreshCat}/>

</>
  )
}
