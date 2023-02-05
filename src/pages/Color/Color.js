import React from 'react'
import Colorcom from '../../components/color/Color'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from "../../components/Footer/Footer"


export default function Color() {
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
    <Colorcom/>
    <Footer/>
    </div>
  </div>
  )
}
