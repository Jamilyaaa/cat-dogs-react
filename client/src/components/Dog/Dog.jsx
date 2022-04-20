import { useDispatch, useSelector } from "react-redux";
import { addDogSaga } from "../../redux/ac/dogAC";
import Buttons from "../Buttons/Buttons";
import Picture from "../Picture/Picture";



export default function Dog() {
  const dispatch = useDispatch()

  const dog = useSelector(store=>store.dogs)

  const refreshDog = (e) => {
    e.preventDefault()
    dispatch(addDogSaga())
  }

  return (
<>
<Picture url={dog}/>
<Buttons refresh={refreshDog}/>
</>
  )
}
