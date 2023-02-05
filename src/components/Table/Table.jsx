import React from 'react'
import "./Table.css"

import LinearProgress from '@mui/material/LinearProgress';


export default function Table() {
  return (
    <div className='table'>
        <div className="project">
            <h4 className="">Project</h4>
            <span className='project-span'>Server Migration</span>
            <progress value="20" max="100"></progress>
            <span className='project-span'>Sales Tracking</span>
            <progress value="40" max="100"></progress>
            <span className='project-span'>Customer Database</span>
            <progress value="60" max="100"></progress>
            <span className='project-span'>Payout Details</span>
            <progress value="80" max="100"></progress>
            <span className='project-span'>Account Setup</span>
            <progress value="100" max="100"></progress>
            <div className="colors">
              <div className="color-p">
                <div className="p primary ">primary</div>
                <div className="p Secondary">Secondary</div>
              </div>
              <div className="color-p">
                <div className="p Success">Success</div>
                <div className="p Dark">Dark</div>
              </div>
              <div className="color-p ">
                <div className="p Danger">Danger</div>
                <div className="p Warning">Warning</div>
              </div>
              <div className="color-p">
                <div className=" p Info">Info</div>
                <div className=" p Light">Light</div>
              </div>
              
            </div>
        </div>
       
        <div className="illustration">
        <h4 className="">Development approach</h4>
        <img className='img-home' src="/asset/2.jpeg" alt="" />
        <p className="paragraph-low">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis ab molestiae iusto voluptatem modi velit, minima exercitationem voluptatum, recusandae culpa laborum vel saepe illo porro iste qui! Magnam, a!</p>
        <a href="">Browse Illustrations on unDraw →</a>
        <div className="ill-2">
          <h4 className="">Development approach</h4>
          <p className="paragraph-low">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
          <p className="paragraph-low">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes</p>
        </div>
        </div>
    </div>
  )
}
