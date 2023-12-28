import React from 'react'

function SignUp() {
    function SignUpForm() {
        alert("Sign up successful! Proceed to Login")
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <form className='p-5 shadow-sm' style={{ width: "500px" }} >
                <h3>Sign Up</h3><br />
                <div className='mb-3'>
                    <span>Username</span><br />
                    <input type="text" className='form-control mt-2' />
                </div>
                <div className='mb-3'>
                    <span>Email</span><br />
                    <input type="email" className='form-control mt-2' />
                </div>
                <div className='mb-3'>
                    <span>Address</span><br />
                    <input type="text" className='form-control mt-2' />
                </div>
                <div className='mb-3'>
                    <span>Contact</span><br />
                    <input type="number" className='form-control mt-2' />
                </div>
                <div className='mb-3'>
                    <span>Password</span><br />
                    <input type="password" className='form-control mt-2' />
                </div>
                <button onClick={SignUpForm} className='btn btn-primary px-5 mt-2'>Sign up</button>
            </form>

        </div>
    )
}

export default SignUp
