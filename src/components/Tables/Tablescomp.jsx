import React, { useEffect, useState } from 'react'
import Chart from '../featured/chart/Chart'
import Featured from '../featured/featured/Featured'
import "./Tablescomp.css"
import { DataGrid } from '@mui/x-data-grid';
import { padding } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const styles = {
  float: "right",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "yellowgreen",
  cursor: "pointer"
}


export default function Tablescomp() {
  const [api, setApi] = useState([])
  const navigate = useNavigate()

  const deletes = async (id) => {
    await axios.delete(`https://639b20c6d5141501974c2da2.mockapi.io/student/${id}`)
    getData()

  }
  
  const getData = async () => {
    let req = await axios.get('https://639b20c6d5141501974c2da2.mockapi.io/student')
    setApi(req.data)
  }

  useEffect(() => {
    getData()
  }, [])


  const Update = async ({ id,firstname, lastname,email,contact,age }) => {
    localStorage.setItem("id",id)
    localStorage.setItem('firstname', firstname)
    localStorage.setItem('lastname', lastname)
    localStorage.setItem('email', email)
    localStorage.setItem('contact', contact)
    localStorage.setItem('age', age)
    navigate('/edituser')
}

  return (
    <div className='tables'>
      <button onClick={() => navigate("/adduser")} style={styles}>ADD NEW STUDENT</button>
      <h1>Tables</h1>
      <p className='tables-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit ratione molestias. Facere numquam laboriosam molestias rerum corrupti. Nam magnam necessitatibus nulla dolore tempore veniam minima quasi esse inventore illum!</p>
      {/* <div style={{ height: "80vh", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div> */}
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {api.map((item) => (
            <>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.age}</td>
                <td><button onClick={() => Update(item)}>EDIT</button></td>
                <td><button onClick={() => deletes(item.id)}>DELETE</button></td>
              </tr>
            </tbody>
            </>
          ))}

        </table>
      </div>
    </div>
  )
}
