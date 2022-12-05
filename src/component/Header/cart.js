import React from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './cart.css';

const Cart = () => {

    return(
        <div className='Cart_detail'>
            < ShoppingCartOutlinedIcon />
            <span>Cart</span>
        </div>
    )

}
export default Cart;