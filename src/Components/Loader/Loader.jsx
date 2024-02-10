import React from 'react'
import LoaderImg from '../../Images/loader.svg'
import '../Loader/Loader.css'

const Loader = () => {
  return (
    <div className="loader flex flex-c">
      <img src={LoaderImg} alt='loader'></img>
    </div>
  )
}

export default Loader