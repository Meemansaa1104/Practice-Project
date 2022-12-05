import React from 'react';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DownloadIcon from '@mui/icons-material/Download';

import './MoreTool.css'

const MoreTool = () => {
  return (
    <div className='moreT'>
       <div className='moreT_tool'>
            < NotificationsActiveIcon />
            <p>Notification Preferences</p>
       </div>
       <hr/>
       <div className='moreT_tool'>
            < LiveHelpIcon />
            <p>24x7 Customer Care</p>
       </div>
       <hr/>
       <div className='moreT_tool'>
            < TrendingUpOutlinedIcon />
            <p>Advertise</p>
       </div>
       <hr/>
       <div className='moreT_tool'>
            < DownloadIcon />
            <p>Download App</p>
       </div>
    </div>

  )
}

export default MoreTool;