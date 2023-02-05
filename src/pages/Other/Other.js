import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Othercom from '../../components/Other/Othercom'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from "../../components/Footer/Footer"

export default function Other() {
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
    <Othercom/>
    <Footer/>
    </div>
  </div>
  )
}
