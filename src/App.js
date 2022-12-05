import React from 'react';

import { Data } from './component/Data';

import Header from './component/Header/header';

import Card from './component/Card';

const app = () => {
  return (
    <div>
        <Header/>
        <div style={{display :'flex', flexWrap : 'wrap'}}>
        {
          Data.map(item =>(
           < Card Image={item.Image} Name={item.Name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice}/>
          ))
        }
        </div>
    </div>
  )
}

export default app