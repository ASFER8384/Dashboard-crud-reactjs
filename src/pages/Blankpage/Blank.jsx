import React from 'react'
import Blankcomp from '../../components/Blank/Blankcomp'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Blank() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <Blankcomp/>
    <Footer/>
    </div>
  </div>
  )
}
