import React from 'react'
import "./Color.css"

export default function Colorcom() {
  return (
    <div className='colorcom'>
      <h1 >Color utilities</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facere provident labore blanditiis sunt! Officia, facilis modi. Rerum blanditiis animi fuga neque ducimus maxime qui, iste eos nemo eaque unde.</p>
      <div className="colorcom-body">
        <div className="left-colorcom">
          <h4 className='heading'>Custom Text Color Utilities</h4> <div className="color-box">
            <div className="gray-100 box-size-top"><span className='colorname'>.text-gray-100</span></div>
            <div className="gray-200 box-size-top"><span className='colorname'>.text-gray-200</span></div>
            <div className="gray-300 box-size-top"><span className='colorname'>.text-gray-300</span></div>
            <div className="gray-400 box-size-top"><span className='colorname'>.text-gray-400</span></div>
            <div className="gray-500 box-size-top"><span className='colorname'>.text-gray-500</span></div>
           <div className="gray-600 box-size-top "><span className='colorname'>.text-gray-600</span></div>
            <div className="gray-700 box-size-top"><span className='colorname'>.text-gray-700</span></div>
            <div className="gray-800 box-size-top"><span className='colorname'>.text-gray-800</span></div>
            <div className="gray-900 box-size-top"><span className='colorname'>.text-gray-900</span></div>
          </div>
        </div>
        <div className="center-colorcom">
          <h4 className='heading'>Custom Background Gradient Utilities</h4>
          <div className="color-box">
            <div className="primary box-size"><span className='colorname'>.bg-primary</span></div>
            <div className="Secondary box-size"><span className='colorname'>.bg-Secondary</span></div>
            <div className="Success box-size"><span className='colorname'>.bg-Success</span></div>
            <div className="Danger box-size"><span className='colorname'>.bg-Danger</span></div>
            <div className="Warning box-size"><span className='colorname'>.bg-Warning</span></div>
            <div className="Info box-size"><span className='colorname'>.bg-Info</span></div>
            <div className="Light box-size "><span className='colorname'>.bg-Light</span></div>
            <div className="Dark  box-size"><span className='colorname'>.bg-Dark</span></div>

          </div>
        </div>
        <div className="right-colorcom">
          <h4 className='heading'>Custom Background Gradient Utilities</h4>
          <div className="color-box">
            <div className="white box-size-bottom"><span className='colorname'>.bg-white</span></div>
            <div className="gray-1 box-size-bottom"><span className='colorname'>.bg-gray-1</span></div>
            <div className="gray-2 box-size-bottom"><span className='colorname'>.bg-gray-2</span></div>
            <div className="gray-3 box-size-bottom"><span className='colorname'>.bg-gray-3</span></div>
            <div className="gray-4 box-size-bottom"><span className='colorname'>.bg-gray-4</span></div>
            <div className="gray-5 box-size-bottom"><span className='colorname'>.bg-gray-5</span></div>
            <div className="gray-6 box-size-bottom "><span className='colorname'>.bg-gray-6</span></div>
            <div className="gray-7 box-size-bottom"><span className='colorname'>.bg-gray-7</span></div>
            <div className="gray-8 box-size-bottom"><span className='colorname'>.bg-gray-8</span></div>
            <div className="gray-9 box-size-bottom"><span className='colorname'>.bg-gray-9</span></div>

          </div>
        </div>
      </div>
    </div>
  )
}
