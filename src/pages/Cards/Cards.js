import React from 'react'
import Cardcom from '../../components/Card/Cardcom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import Footer from "../../components/Footer/Footer"


export default function Cards() {
  return (
<div className='home'>
      <Sidebar/>
      <div className="homecontainer">
      <Navbar/>
      {/* <h1>Cards</h1> */}
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="one"/>
        <Widget type="cart"/>
      </div>
      <Cardcom/>
      <Footer/>
      </div>
    </div>
  )
}
