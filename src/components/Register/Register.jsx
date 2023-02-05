import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
import { useFormik } from 'formik'
import * as yup from "yup"


const validateRegisterform=yup.object({
  firstname:yup.string().required(),
  lastname:yup.string().required(),
  email:yup.string().required(),
  password:yup.string().required(),
  confirmpassword: yup.string().required()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
})





export default function Register() {

const formik = useFormik({
  initialValues:{firstname:"",lastname:"",email:"",password:"",confirmpassword:""},
  validationSchema:validateRegisterform,
  onSubmit:(values) => {
    console.log(values)
  }
})



  const navigate = useNavigate()
  return (
  <div className="register">
    <div className="register-body">
      <div className="left-register">
        <img className='imageregister' src="/asset/1.jpeg" alt="" />
      </div>
      <div className="right-register">
        <h3 className='create'>Create Account</h3>

        <form className='reg' onSubmit={formik.handleSubmit}>
        <div className="create-name">
          <div className="fn">
          <input type="text" className='name-create' placeholder='Enter First Name'
        id='firstname'
        name='firstname'
        onChange={formik.handleChange}
        value={formik.values.firstname}
        onBlur={formik.handleBlur}
         /><br/>
         {formik.touched.firstname && formik.errors.firstname ? <span className="error"> {formik.errors.firstname}</span> : '' }
          </div>
          <div className="ln">
          <input type="text" className='name-create'placeholder='Enter Last Name' 
         id='lastname'
         name='lastname'
         onChange={formik.handleChange}
         value={formik.values.lastname}
         onBlur={formik.handleBlur}
        /><br/>
        {formik.touched.lastname && formik.errors.lastname ? <span className="error">{ formik.errors.lastname}</span> : '' }
          </div>
       
        </div><br />

        <input type="email"className='create-email' placeholder='Enter Email' 
         id='email'
         name='email'
         onChange={formik.handleChange}
         value={formik.values.email}
         onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? <span className="errors">{formik.errors.email}</span> : '' }
        <br />

        <div className="create-password">
          <div className="pas">
          <input type="password" className="password-create" placeholder='Enter Password'
         id='password'
         name='password'
         onChange={formik.handleChange}
         value={formik.values.password}
         onBlur={formik.handleBlur}
        /><br />
         {formik.touched.password && formik.errors.password ? <span className="error">{formik.errors.password}</span> : '' }
          </div>
        <div className="conpas ">
        <input type="password"className="password-create" placeholder='Confirm Password'
         id='confirmpassword'
         name='confirmpassword'
         onChange={formik.handleChange}
         value={formik.values.confirmpassword}
         onBlur={formik.handleBlur}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span className="error">{formik.errors.confirmpassword}</span> : '' }
        </div>
        </div><br />
        
        <button className='btn-create sub'>Submit</button><br /><br />
        </form>




        <button className='btn-create google'>Create with Google</button><br />
        <button className='btn-create facebook'>Create with facebook</button>
        <a href='/forgetpassword' className='Forget login-reg'>Forget password</a>
        <a href='/login'  className='login-reg'>Already have an account? Login</a>
      </div>
    </div>
  </div>
  )
}
