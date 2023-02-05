import React from 'react'
import Chartscomp from '../../components/Charts/Chartscomp'
import Chart from '../../components/featured/chart/Chart'
import Featured from '../../components/featured/featured/Featured'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/Table/Table'

export default function Charts() {
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
      <Chartscomp/>
      
      {/* <Table/> */}
      <Footer/>
      </div>
    </div>
  )
}
