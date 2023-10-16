import React from 'react';
import LoaderImg from '../assets/images/loader.gif'

const Loader = () => {
  return (
    <>
        <div className='loader'>
            <img src={LoaderImg} alt="loader" />
        </div>
    </>
  )
}

export default Loader