import React from 'react'
import "./Othercom.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Othercom() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='Othercom'>
      <h1>Other Utilities</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat accusantium, veniam omnis nihil sapiente officia ipsum earum nostrum obcaecati pariatur! Natus, dolor. Ratione, cum. Debitis blanditiis illo rem molestias deleniti!</p>
      <div className="Othercom-body">
        <div className="left-Othercom">
          <div className="top-left-Othercom">
            <h4 className="heading">Overflow Hidden Utilty</h4>
            <p className='paragraphOther'>Use .o-hidden to set the overflow property of any element to hidden.</p>
          </div>
          <div className="center-left-Othercom">
            <h4 className="heading">Progress Small Utility</h4>
            <span className='progress-name'>Normal Progress Bar</span>
            <progress className='bigprog' value="80" max="100" ></progress>
            <span className='progress-name'>small Progress Bar</span>
            <progress className='smallprog' value="80" max="100"></progress>
            <span className='smallprog-name'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quasi!</span>
          </div>
          <div className="bottom-left-Othercom">
            <h4 className="heading">Dropdown - No Arrow</h4>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Without label</FormHelperText>
            </FormControl>
          </div>
        </div>
        <div className="right-Othercom">
          <h4 className="heading">Rotation Utilities</h4>
          <div className="rotate">
            <div className="top-rotate">
              <span>.rotate-15</span>
            </div>
            <div className="bottom-rotate">
              <div className='rotateleft'>
                <span>.rotate-15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
