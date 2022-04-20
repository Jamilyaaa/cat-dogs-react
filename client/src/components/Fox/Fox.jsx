import { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import Picture from "../Picture/Picture";
import axios from 'axios'

export default function Fox() {
  const [data, setData]=useState('');

  useEffect(()=>{
    axios.get('https://randomfox.ca/floof/')
    .then(response=>setData(response.data.image))
  },[])

  const refreshFox = async ()=> {
    const response= await axios('https://randomfox.ca/floof/');
    const url =await response.data.image;
     setData(url)
  }

  return (
    <>
    <Picture url={data}/>
    <Buttons refresh={refreshFox}/>
    </>
  )
}
