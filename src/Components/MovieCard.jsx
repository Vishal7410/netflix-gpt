// import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCards = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>       
            <img src={IMG_CDN_URL+poster} alt="MoviCard" />
       </div>
  )
}

export default MovieCards