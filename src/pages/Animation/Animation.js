import React from 'react'
import Animationcom from '../../components/Animation/Animation'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from "../../components/Footer/Footer"

export default function Animation() {
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
    <Animationcom/>
    <Footer/>
    </div>
  </div>
  )
}
