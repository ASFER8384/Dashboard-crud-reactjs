import React from 'react'
import Usercomp from '../../components/Blank copy/Blankcomp'
import Blankcomp from '../../components/Blank/Blankcomp'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function User() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <Usercomp/>
    <Footer/>
    </div>
  </div>
  )
}
