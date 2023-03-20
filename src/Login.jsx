import React from 'react'
import "./Login.css"
import logo from './assets-Login/3 426529.jpg'

import bgImg from './assets-Login/Vector.jpg'

function Login() {
  return (
    <div>
    <section>
            <div className='Login'>
            <img  src={logo} alt=""/>
            <div className='col-1'>
                <h2>Log in</h2>
                <form id="form" className='flex flex-col'>
                    <input type='text' className='email' placeholder='Email'/>
                <input type="text"   className='Password' placeholder="Password"/>
                    <div class="remember-forgot">
                   <label><input type="checkbox"/> Remember me</label>
                    <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className='btn'>Log in</button>
                    <div classname="footer">
                    <span>Dont have an account? <a href="createAccount" >CreateAccount</a></span></div>
                </form>
                
            </div>
            <div className='col-2'>
                <h1>Welcome to Devoct</h1>
                <h3>Developing the best and efficient website, web applications and software application </h3>
                <img src={bgImg} alt=""/>
                
            </div>
            </div>
        </section>
      
    </div>
  )
}

export default Login

