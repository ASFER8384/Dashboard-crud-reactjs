import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import LayersIcon from '@mui/icons-material/Layers';
import TableChartIcon from '@mui/icons-material/TableChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import SpeedIcon from '@mui/icons-material/Speed';
import React from 'react'
import "./sidebar.css"
import Navbar from "../navbar/Navbar"
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="sidebar-body">
      <div className='sidebar'>
        <div className="top-side" onClick={() => navigate("/")}>
          ADIMN
        </div>
        <hr></hr>
        <div className="center-side">
          <ul>
            <li  >
              <div className='das-div'>
              <SpeedIcon className=' dash-icon'  sx={{ fontSize: "30px",marginTop:"10px" }} />
              <span className=' dash ' onClick={() => navigate("/")}>Dashboard</span>
              </div>
              
            </li>
            <hr></hr>
            <p className="title side-title">Interface</p>
            <li>
              {/* <span className='lists'>Component</span> */}
                <Accordion sx={{boxShadow:"none",width:"90%",backgroundColor:"transparent",color:"#fff"}}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                  >
                    <SettingsIcon className='icon' sx={{ fontSize: "20px" }} />
                    <Typography  className='lists' >component</Typography>
                  </AccordionSummary>
                  
                  <AccordionDetails sx={{boxShadow:"0px 0px 5px black",backgroundColor:"white",color:"black"}}>
                  <Typography sx={{cursor:"none",fontSize:"14px",marginBottom:"10px",color:"gray"}} onClick={() => navigate("/button")}>
                    Custom Components:
                  </Typography>
                    <Typography className='hover' onClick={()=>navigate("/button")} >
                      Button
                    </Typography>
                    <br></br>
                    <Typography className='hover' onClick={()=>navigate("/cards")} >
                      Card
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </li>
            <li>
              {/* <span className="lists">Utilities</span> */}
              <Accordion sx={{boxShadow:"none",width:"90%",backgroundColor:"transparent",color:"#fff"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                  aria-controls="panel1a-content"
                >
                  <BuildIcon className='icon' sx={{ fontSize: "20px" }} />
                  <Typography  className='lists'>Utilities</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{boxShadow:"0px 0px 5px black",backgroundColor:"white",color:"black"}}>
                  <Typography sx={{cursor:"none",fontSize:"18px",color:"gray"}} onClick={() => navigate("/button")}>
                    Custom Utilities
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=>navigate("/color")}   >
                    Color
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=>navigate("/border")}  >
                    Border
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=>navigate("/animation")}   >
                    Animation
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=>navigate("/other")}  >
                    Other
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
            <hr></hr>
            <p className="title side-title">Addon</p>
            <li>
              {/* <LayersIcon className='icon' sx={{ fontSize: "15px" }} /> */}
              {/* <span className="lists"></span> */}
              <Accordion sx={{boxShadow:"none",width:"90%",backgroundColor:"transparent",color:"#fff"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                  aria-controls="panel1a-content"
                >
                  <LayersIcon className='icon' sx={{ fontSize: "20px" }} />
                  <Typography  className='lists'>pages</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{boxShadow:"0px 0px 5px black",backgroundColor:"white",color:"black"}}>
                <Typography  sx={{cursor:"none",fontSize:"18px",color:"gray"}}
                >
                    Login screen
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={() => navigate("/login")}>
                    Login
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=> navigate("/register")}>
                    Register
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=> navigate("/forgetpassword")}>
                    Forget password
                  </Typography>
                  <br />
                  <Typography sx={{cursor:"none",fontSize:"18px",color:"gray"}}>
                    Login
                  </Typography>
                  <br />
                  <Typography className='hover' onClick={()=>navigate("/404")}   >
                    404
                  </Typography>
                  <br></br>
                  <Typography className='hover' onClick={()=>navigate("/blankpage")}>
                    Blank page
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              {/* <StackedBarChartIcon className='icon' sx={{ fontSize: "15px" }} /> */}
              {/* <span className="lists"></span> */}
              <div sx={{boxShadow:"none"}}>
                <AccordionSummary
                >
                  <StackedBarChartIcon className='icon' sx={{ fontSize: "20px" }} />
                  <Typography  className='lists' onClick={()=>navigate("/charts")}>Charts</Typography>
                </AccordionSummary>
              </div>
            </li>
            <li>
              {/* <span className="lists"></span> */}
              <div sx={{boxShadow:"none"}}>
                <AccordionSummary
                >
                  <StackedBarChartIcon className='icon' sx={{ fontSize: "20px" }} />
                  <Typography onClick={()=>navigate("/tables")}  className='lists'>Tables</Typography>
                </AccordionSummary>
              </div>
            </li>
          </ul>
          <hr></hr>
        </div>
        
      </div>
    </div>
  )
}
