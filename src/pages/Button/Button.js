import React from 'react'
import ButtonComp from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Button() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <div className="widgets">
        <ButtonComp/>
        
    </div>
    <Footer/>
    </div>
  </div>
  )
}
