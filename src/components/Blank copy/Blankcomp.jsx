import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Usercomp() {
  const [id,setId]=useState("")
  const [image,setImage]=useState("")
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState("")
  const [age,setAge]=useState("")

const navigate = useNavigate()

const submit = async () => {
  await axios.post('https://639b20c6d5141501974c2da2.mockapi.io/student', {
      id,
      firstname,
      lastname,
      email,
      contact,
      age
      
  })
  navigate('/tables')
}
  return (
    <>
    <div className='users'>
      {/* <div className="user1">
        <img className='userimg' src={image} alt="" />
      </div> */}
      <div className="user2">
        {/* <input onChange={(event) => setId(event.target.value)} placeholder='Enter image url' className='addinp' type="text" /><br /><br /> */}
        <input onChange={(event) => setFirstname(event.target.value)}  placeholder='Enter First Name' className='addinp' type="text" /><br /><br />
        <input onChange={(event) => setLastname(event.target.value)}  placeholder='Enter Last Name' className='addinp' type="text" />
      </div>
      <div className="user3">
        <input  onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' className='addinp' type="text" /><br /><br />
        <input onChange={(event) => setContact(event.target.value)}  placeholder='Enter Contact' className='addinp' type="text" /><br /><br />
        <input  onChange={(event) => setAge(event.target.value)} placeholder='Enter Age' className='addinp' type="text" />
      </div>
    </div>
    <div className="Adduser">
    <button className='adduser' onClick={submit}>ADD USER</button>
    </div>
    </>
  )
}
