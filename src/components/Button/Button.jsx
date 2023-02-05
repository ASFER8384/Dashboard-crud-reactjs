import React from 'react'
import "./Button.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ButtonComp() {
  return (
    <div className='buttoncomp'>
      <div className="left-buttoncomp">
        <div className="top-buttoncomp">
          <h4 className="heading">Circle Buttons</h4>
          <p className="paragraph-low">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non at, veniam repellat hic harum? Eius, sint. Nisi tenetur minus quod assumenda, animi amet eos obcaecati exercitationem doloremque earum ipsam?</p>
          <div className="one-butcomp">
            <span>.btn-circle</span><br /><br />
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"blue"}}>
              <FacebookSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellowgreen"}}>
              <CheckIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"slateblue"}}>
              <InfoSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellow"}}>
              <WarningSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"red"}}>
              <DeleteIcon sx={{color:"white"}} />
            </IconButton>
          </div>
          <div className="two-butcomp">
            <span>.btn-circle</span><br /><br />
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"blue"}}>
              <FacebookSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellowgreen"}}>
              <CheckIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"slateblue"}}>
              <InfoSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellow"}}>
              <WarningSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"red"}}>
              <DeleteIcon sx={{color:"white"}} />
            </IconButton>
          </div>
          <div className="three-butcomp">
            <span>.btn-circle</span><br /><br />
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"blue"}}>
              <FacebookSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellowgreen"}}>
              <CheckIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"slateblue"}}>
              <InfoSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"yellow"}}>
              <WarningSharpIcon sx={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" sx={{backgroundColor:"red"}}>
              <DeleteIcon sx={{color:"white"}} />
            </IconButton>
          </div>

        </div>
        <div className="bottom-buttoncomp">
          <h4 className="heading brand">Brand Buttons</h4>
          <p className="paragraph-low">Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
          <p className="paragraph-low">You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
          <button className='brand-btn google'>Google</button>
          <button className='brand-btn facebook'>Facebook</button>
        </div>
      </div>
      <div className="right-buttoncomp">
        <h4 className="heading">Split Buttons with Icon</h4>
        <p className="paragraph-button">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste quod at consequatur aut inventore perspiciatis, eligendi sit qui optio nobis illo distinctio excepturi expedita vitae similique laudantium cupiditate neque.</p>
        <Stack className='btn' direction="column" spacing={2}>
          <Button variant="outlined" sx={{backgroundColor:"blue",color:"white"}} startIcon={<FlagIcon />}>
            Split Button Primary
          </Button>
          <Button variant="contained" sx={{backgroundColor:"yellowgreen",color:"white"}} startIcon={<CheckIcon />}>
          Split Button Sucess
          </Button>
          <Button variant="outlined" sx={{backgroundColor:"slateblue",color:"white"}} startIcon={<InfoSharpIcon />}>
          Split Button Info
          </Button>
          <Button variant="contained" sx={{backgroundColor:"yellow",color:"white"}} startIcon={<WarningSharpIcon />}>
          Split Button Warning
          </Button>
          <Button variant="outlined" sx={{backgroundColor:"red",color:"white"}} startIcon={<DeleteIcon />}>
          Split Button Danger
          </Button>
          <Button variant="contained" sx={{backgroundColor:"gray",color:"white"}} startIcon={<ArrowForwardIcon />}>
          Split Button Secondary
          </Button>
          <Button variant="contained" sx={{backgroundColor:"white",color:"black"}} startIcon={<ArrowForwardIcon />}>
          Split Button Light
          </Button>
        </Stack>
        <span className='paragraph-low'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        <Stack className='btn sma' direction="column" spacing={2}>
        <Button variant="outlined" sx={{backgroundColor:"blue",color:"white",fontSize:"10px"}} startIcon={<FlagIcon />}>
            Split Button small
          </Button>
        </Stack>
        <Stack className='btn lar' direction="column" spacing={2}>
        <Button variant="outlined" sx={{backgroundColor:"blue",color:"white",fontSize:"18px"}} startIcon={<FlagIcon />}>
            Split Button small
          </Button>
        </Stack>
      </div>
    </div>
  )
}
