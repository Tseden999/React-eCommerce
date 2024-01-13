import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    //state is a varaiable which dynamically render the page on state update
    //refresh the page automatically on state update
    //called hooks: kind of function which supports react states
    //a function can only b called hooks if the fucntion name starts with cammel case
    //react states r useState, useEffect
    const [loginDetails, setLoginDetails] = useState({ email: null, password: null })
    const redirectPage = useNavigate();



    function LoginForm() {
        alert("Login successful!")
        redirectPage('/');
        console.log(loginDetails)
    }
    function handleChange(name, e) {

        const value = e.target.value
        setLoginDetails({ ...loginDetails, [name]: value })//... spread operator-used to copy all the values of variable
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='p-5 shadow-sm' style={{ width: "500px" }}>
                <h1>Login </h1><br />
                <div className=''>
                    <span>Email address</span><br />
                    <input type="email" className='form-control mt-3' onChange={(e) => handleChange("email", e)} />
                </div>
                <div>
                    <span>Password</span><br />
                    <input type="password" className='form-control mt-3' onChange={(e) => handleChange("password", e)} />
                </div>
                <div>
                    <button onClick={LoginForm} className='btn btn-primary px-5 mt-3'> Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login
