import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';

import carousel from 'react-multi-carousel'

import './Card.css';

const Card = ({offerPrice, actualPrice, Name, rating, Image}) => {
  return (
    <div className='card'>
        <div className='card__Fav'>
            <FavoriteIcon/>
        </div>
        <div className='card__Image'>
            <img src={Image} alt='Images'/>
        </div>
    <div className='contentDet'>    
        <div className='card__Details'>
            <p className='title'>{Name}</p>
            <p>running Shoes</p>
            <span className='span1'>₹{offerPrice}</span>
            <span className='span2'>₹{actualPrice}</span>
            <span className='span3'>50%</span>
        </div>
        <div className='card__Size'>
            <p> size <span> 6, 7, 8, 9, 10</span></p>
        </div>
    </div>    
    </div>
  )
}

export default Card