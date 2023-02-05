import React from 'react'
import "./Widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
export default function Widget({type}) {
  let data;

const amount=100
const diff=20

switch(type){
  case"user":
   data={
      title:"EARNINGS(MONTLY)",
      ismoney:"$"+40000,
      link:"see all users",
      icon:<RequestQuoteIcon className='icon'/>
  };
  break;
  case"order":
  data={
    title:"EARNINGS(ANUALY)",
    ismoney:"$"+215000,
    link:"see all users",
    icon:<PaidOutlinedIcon className='icon'/>
};
break;
case"one":
data={
  title:"TASK",
  ismoney:50 +"%",
  link:"see all users",
  icon:<AssignmentIcon className='icon'/>
};
break;
case"cart":
data={
  title:"PENDING",
  ismoney:18,
  link:"see all users",
  icon:<MarkUnreadChatAltIcon className='icon'/>
};
break;
default:
break;
}
  return (
    <div className='widget'>
      <div className="left">
        <span className="titl">{data.title}</span>
        <span className="counter">{data.ismoney}</span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon/> */}
          {/* {diff}% */}
        </div>
        {data.icon}
      </div>
    </div>
  )
}
