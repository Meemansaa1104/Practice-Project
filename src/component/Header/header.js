import React from 'react';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import Search from './searchBar';

import Cart from './cart';

import More from './more';

import './header.css';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import LoginDetails from './loginDetails';

import 'tippy.js/themes/light.css';

const Header = () => {
  return (
    <div className='head'>
    <Tippy theme = 'light' content = {< LoginDetails />} interactive = {true} offset = {[5,33]}>
    < ExpandMoreOutlinedIcon style = {{color : 'white', cursor: 'pointer'}}/>
    </Tippy>
        <div className='head_logo'>
            <img src='/Image/flipkart.logo.png' alt = 'flipkart log'/>
            <div className='explor'>
            <img src='/Image/flipkart.log.jpg' alt = 'flipkart logo'/>
            </div>
        </div>
        <div className='Component'>
          <Search/>
          <More/>
          <Cart/>
        </div>
    </div>
  )
}

export default Header