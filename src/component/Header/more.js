import React from 'react';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import 'tippy.js/dist/tippy.css';

import './more.css';
import Tippy from '@tippyjs/react';

import MoreTool from './MoreTool'

import 'tippy.js/themes/light.css';

const More = () => {

    return(
        <div className='moreDetails'>
            <span>More</span>   
            <Tippy theme = 'light' content = {< MoreTool />} interactive = {true} offset = {[5,33]}>
            < ExpandMoreOutlinedIcon />
            </Tippy>
        </div>
    )

}
export default More;