import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCards = ({poster}) => {
    console.log("poster ");
  return (
    <div className='w-48 pr-4'>
        
            <img src={IMG_CDN_URL+poster} alt="MoviCard" />
        
     
    </div>
  )
}

export default MovieCards