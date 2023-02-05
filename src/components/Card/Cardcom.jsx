import React from 'react'
import "./Cardcom.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));








export default function Cardcom() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }
  return (
    <div className='cardcom'>
        <div className="left-cardcom">
            <div className="top-left-cardcom">
           <Typography sx={{color:"gray"}} className='heading'>Default Card</Typography >
              <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae veritatis cumque illo. Numquam minima aliquid mollitia optio debitis consectetur accusantium illum quasi nulla laborum ex, aperiam repellat facere tenetur.</p>
            </div>
            <div className="bottom-left-cardcom">
            <Typography className='heading'>Basic Card Example</Typography>
              <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae veritatis cumque illo. Numquam minima aliquid mollitia optio debitis consectetur accusantium illum quasi nulla laborum ex, aperiam repellat facere tenetur.</p>
            </div>
        </div>
        <div className="right-cardcom">
        <div className="top-right-cardcom">
        <Typography className='heading'>Dropdown Card Example</Typography>
              <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae veritatis cumque illo. Numquam minima aliquid mollitia optio debitis consectetur accusantium illum quasi nulla laborum ex, aperiam repellat facere tenetur.</p>
        </div>
            <div className="bottom-right-cardcom">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className='collapse' >
          <Typography  sx={{color:"slateblue"}} >Collapse card example</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
    </div>
  )
}
