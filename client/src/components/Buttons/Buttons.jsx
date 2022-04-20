import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../../redux/ac/counterAC"

export default function Button({refresh}) {
  const counterLike = useSelector((state)=>state.counterLike) 
  const counterDisLike = useSelector((state)=>state.counterDisLike) 

  const dispatch = useDispatch();

  return (

<>
<center>
  <hr />
<button onClick={()=>{dispatch(increment())}}><span className="material-icons">thumb_up</span>{counterLike}</button>
<button onClick={refresh}><span className="material-icons" >sentiment_neutral</span></button>
<button onClick={()=>{dispatch(decrement())}}><span className="material-icons">thumb_down</span>{counterDisLike}</button>
</center>
</>
  )
}
