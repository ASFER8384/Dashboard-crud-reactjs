import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Logincom.css"
import {Formik, useFormik} from "formik"
import * as yup from "yup"


const validateForm=yup.object({
    email:yup.string().min(5).required(),
    password:yup.string().min(5,"Too Short*").max(12,"Too Long*").required()
})




export default function Logincom() {

    const formik = useFormik({
        initialValues:{email:"",password:""},
        validationSchema:validateForm,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    const navigate=useNavigate()
  return (
    <div className='logincom'>
        <div className="Logincom-body">
            <div className="left-Logincom-body">
                <img className='imagelogin' src="/asset/1.jpeg" alt="" />
            </div>
            <div className="right-Logincom-body">
                <div className="top-right-Logincom-body">
                    <h3>WELCOME BACK</h3>

                    <form >
                    <input className='inp inpp' type="email" placeholder='Enter Email' 
                    id='email'
                    name='email'
                    
                    /><br />
                   
                    <br /><br />
                    
                    <input className='inp '  type="text" placeholder='Enter Password'
                    id='password'
                    name='password'
                    
                    /><br />
                    <br /><br />
                    <div className="check">
                    <input type="checkbox"  />
                    <label className='checkk'>Remember me</label>
                    </div>
                    <br />
                    <button  className='login sub'>submit</button>
                    </form>

                </div>
                <div className="bottom-right-Logincom-body"><br />
                    <button className='login google'>Sign in with google</button><br />
                    <button  className='login facebook'>Sign in with facebook</button>
                    <a href="/forgetpassword" className='Forget'>Forget Password?</a>
                    <a href='/register' >create account </a>
                </div>
            </div>
        </div>
    </div>
  )
}
