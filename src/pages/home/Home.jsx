import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import "../../components/sidebar/sidebar.css"
import Widget from '../../components/Widget/Widget'
import Chart from "../../components/featured/chart/Chart"
import Featured from "../../components/featured/featured/Featured"
import Table from '../../components/Table/Table'
import Footer from "../../components/Footer/Footer"

export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="one"/>
        <Widget type="cart"/>
      </div>
      <div className="featured">
        {/* <div className="home1"> */}
        <Chart/>
        {/* </div> */}
        {/* <div className="home2"> */}
        <Featured/>
        {/* </div> */}
      </div>
      <Table/>
      <Footer/>
      </div>
    </div>
  )
}
