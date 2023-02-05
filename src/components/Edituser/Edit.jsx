import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Edit.css"
import {Link} from "react-router-dom"

export default function Edit() {
  const [id, setId] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [age, setAge] = useState("")

  const navigate = useNavigate()

  const submit = async () => {
    await axios.put(`https://639b20c6d5141501974c2da2.mockapi.io/student/${id}`, {
      id,
      firstname,
      lastname,
      email,
      contact,
      age
    })
    navigate('/tables')
  }
  useEffect(() => {
    setId(localStorage.getItem("id"))
    setFirstname(localStorage.getItem("firstname"));
    setLastname(localStorage.getItem('lastname'))
    setEmail(localStorage.getItem('email'))
    setContact(localStorage.getItem('contact'))
    setAge(localStorage.getItem('age'))
  }, [])
  return (
    <>
      <div className='users'>
        {/* <div className="user1"> */}
        {/* <button className='adimg'>ADD IMG</button> */}
        {/* </div> */}
        <div className="user2">
          {/* <input value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter ID' className='addinp' type="text" /><br /><br /> */}
          <input value={firstname} onChange={(event) => setFirstname(event.target.value)} placeholder='Enter First Name' className='addinp' type="text" /><br /><br />
          <input value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder='Enter Last Name' className='addinp' type="text" />
        </div>
        <div className="user3">
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' className='addinp' type="text" /><br /><br />
          <input value={contact} onChange={(event) => setContact(event.target.value)} placeholder='Enter Contact' className='addinp' type="text" /><br /><br />
          <input value={age} onChange={(event) => setAge(event.target.value)} placeholder='Enter Age' className='addinp' type="text" />
        </div>
      </div>
      <div className="Adduser">
        <Link to="/tables">
        <button className='adduser' onClick={submit}>UPDATE</button>
        </Link>
        
      </div>
    </>
  )
}
