import React from 'react'
import "./Bordercom.css"

export default function Bordercom() {
  return (
    <div className='bordercom'>
        <h1>Border utilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio autem magnam saepe voluptatem fugiat quasi, aliquam, hic at ullam officia. Quos, nobis sapiente. Quia provident ex aliquid dolorum repudiandae.</p>
        <div className="Bordercom-body">
            <div className="left-bordercom">
            <div className="center-colorco">
            <div className="border-box">
            <div className="left-primary border-size"><span className=''>.bg-primary</span></div>
            <div className="left-Secondary border-size"><span className=''>.bg-Secondary</span></div>
            <div className="left-Success border-size"><span className=''>.bg-Success</span></div>
            <div className="left-Danger border-size"><span className=''>.bg-Danger</span></div>
            <div className="left-Warning border-size"><span className=''>.bg-Warning</span></div>
            <div className="left-Info border-size"><span className=''>.bg-Info</span></div>
            <div className="left-Light border-size "><span className='colorname'>.bg-Light</span></div>
            <div className="left-Dark  border-size"><span className=''>.bg-Dark</span></div>

          </div>
        </div>
            </div>
            <div className="right-Bordercom">
            
          <div className="border-box">
            <div className="botttom-primary border-size"><span className=''>.bg-primary</span></div>
            <div className="botttom-Secondary border-size"><span className=''>.bg-Secondary</span></div>
            <div className="botttom-Success border-size"><span className=''>.bg-Success</span></div>
            <div className="botttom-Danger border-size"><span className=''>.bg-Danger</span></div>
            <div className="botttom-Warning border-size"><span className=''>.bg-Warning</span></div>
            <div className="botttom-Info border-size"><span className=''>.bg-Info</span></div>
            <div className="botttom-Light border-size "><span className='colorname'>.bg-Light</span></div>
            <div className="botttom-Dark  border-size"><span className=''>.bg-Dark</span></div>

          </div>
            </div>
        </div>
    </div>
  )
}
