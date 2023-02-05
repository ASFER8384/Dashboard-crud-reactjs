import React from 'react'
import Bordercom from '../../components/Border/Bordercom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from "../../components/Footer/Footer"


export default function Border() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <Bordercom/>
    <Footer/>
    </div>
  </div>
  )
}
