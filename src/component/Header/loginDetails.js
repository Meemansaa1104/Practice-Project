import React from 'react';

import './loginDetails.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const LoginDetails = () => {

    return(

        <div className='loginDetail'>
            <div className='loginDetails'>
                <AccountCircleIcon />
                <p>My Profile</p>
            </div>
            <hr/>
            <div className='loginDetails'>
                < AddBoxIcon />
                <p> Flipkart Plus Zone</p>
            </div>
            <hr/>
            <div className='loginDetails'>
                < UnarchiveIcon />
                <p>Orders</p>
            </div>            
            <hr/>
            <div className='loginDetails'>
                < FavoriteIcon />
                <p>Wishlist</p>
            </div>
            <hr/>
            <div className='loginDetails'>
                < LoyaltyIcon />
                <p>Rewards</p>
            </div>
            <hr/>
            <div className='loginDetails'>
                < CardGiftcardIcon />
                <p>Gift Cards</p>
            </div>
            <hr/>
            <div className='loginDetails'>
               <p>Become a Seller</p>
            </div>
           
        </div>
    )

}
export default LoginDetails;