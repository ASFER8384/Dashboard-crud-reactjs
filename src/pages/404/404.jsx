import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Errorcomp from '../../components/404page/Errorcomp'

export default function Errorpage() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    {/* <div className="widgets">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="one"/>
      <Widget type="cart"/>
    </div> */}
    <Errorcomp/>
    <Footer/>
    </div>
  </div>
  )
}
