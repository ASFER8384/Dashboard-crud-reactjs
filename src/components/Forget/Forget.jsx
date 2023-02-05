import { useFormik } from 'formik'
import React from 'react'
import "./Forget.css"
import * as yup from "yup"


const validateforget=yup.object({
  email:yup.string().required()
})




export default function Forgetcom() {
  const formik = useFormik({
    initialValues:{email:""},
    validationSchema:validateforget,
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return (
    <div className='forget'>
      <div className="forget-body">
        <div className="left-forget">
          <img className='forget-image' src="/asset/1.jpeg" alt="" />
        </div>
        <div className="right-forget">
          <h3 className='head-forget'>Forget Password</h3>
          <p className='paraforget'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, animi?</p>
          <form onSubmit={formik.handleSubmit} >
          <input className='forget-email' type="email" placeholder='Enter Email' 
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          /><br/>
          {formik.touched.email && formik.errors.email ? <span className="error">{formik.errors.email}</span> : '' }
          <br />
          <button className='forg sub'>Forget</button>
          </form>


          <a href="/register">Create Account</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  )
}
