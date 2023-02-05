import React from 'react'
import "./Animation.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Animationcom() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='animationcom'>
      <h1 className='headcolor'>Animation Utilities</h1>
      <p className='paracolor'>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
      <div className="animationcom-body">
        <div className="left-animationcom">
          <h4 className='heading'>Grow In Animation Utilty</h4>
          <p className='animated' >.animated--grow-in</p>
          <p className='animated-sec'>Navbar Dropdown Example:</p>
          <div className="drop">
            <div className="span-drop">
              <span>Navbar</span>
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em className='droptext'>Dropdown</em>
                  </MenuItem>
                  <MenuItem value={10}>Action</MenuItem>
                  <MenuItem value={20}>Another action</MenuItem>
                  <MenuItem value={30}>Something else here</MenuItem>
                </Select>
              </FormControl>
            </div>
            <p className='paragraph-card' >Note:This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.</p>
          </div>

        </div>
        <div className="right-animationcom">
          <h4 className='heading'>Fade In Animation Utilty</h4>
          <p className='animated' >.animated--grow-in</p>
          <p className='animated-sec'>Navbar Dropdown Example:</p>
          <div className="drop">
            <div className="span-drop">
              <span>Navbar</span>
              <FormControl sx={{ m: 1, minWidth: 140, }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em className='droptext'>Dropdown</em>
                  </MenuItem>
                  <MenuItem value={10}>Action</MenuItem>
                  <MenuItem value={20}>Another action</MenuItem>
                  <MenuItem value={30}>Something else here</MenuItem>
                </Select>
              </FormControl>
            </div>
            <p className='animated-sec'>Dropdown Example:</p>
            <div className='dop-down'>
              <FormControl className='primary' sx={{ m: 1, minWidth: 140, }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Dropdown</em>
                  </MenuItem>
                  <MenuItem value={10}>Action</MenuItem>
                  <MenuItem value={20}>Another action</MenuItem>
                  <MenuItem value={30}>Something else here</MenuItem>
                </Select>
              </FormControl>
            </div>
            <p className='paragraph-card' >Note:This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
