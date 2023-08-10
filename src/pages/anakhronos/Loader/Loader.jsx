import React, { useEffect } from 'react'
import ankush from "./preloader.gif"
import './loader.css'
function Loader() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none'
        }, 5000)
    })
  return (
   <div className='loader'>
   <img  src={ankush} />
   </div>
  )
}

export default Loader