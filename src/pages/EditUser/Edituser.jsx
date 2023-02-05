import React from 'react'
import Usercomp from '../../components/Blank copy/Blankcomp'
import Blankcomp from '../../components/Blank/Blankcomp'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Edit from '../../components/Edituser/Edit'

export default function User() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <Edit/>
    <Footer/>
    </div>
  </div>
  )
}
