import React from 'react'
import "./Featured.css"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Featured() {
  return (
    <div className='featuredcom'>
      <div className="featuredchart">
        <div className="top">
          <h4 className='heading revenue'>
            Revenue Source
          </h4>
        </div>
        <div className="bottom" style={{ width: "80%" }}>
            <CircularProgressbar  className='bar' value={70} text="70%" strokeWidth={2}/>
        </div>
        {/* <span className='bot-spa'>Styling for the donut chart can be found in the /js/demo/chart-pie-demo.js file.</span> */}
      </div>
    </div>
  )
}
