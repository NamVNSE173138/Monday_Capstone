import React from 'react'

const Register = () => {
    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-52'>
                <p className='text-center font-medium text-4xl mt-[-15%] mb-4'>Welcome to monday.com</p>
                <p className='text-center text-lg mb-14'>Get started - it's free. No credit card need.</p>
                <button className='border text-center w-full p-2 rounded-md'>
                    <img className='w-4 float-left mt-1 mr-3 ml-[30%]' alt='' src='https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg' />
                    <p className='float-start'>Continue with Google</p>
                </button>
                <div className='flex items-center border-t-2 mt-7 my-5'>
                    <div className='flex-1'></div>
                    <div className='mx-4 mt-[-14px]'>Or</div>
                    <div className='flex-1'></div>
                </div>
                <input className='border w-full p-2 rounded-md' placeholder='name@company.com' />
                <button className='rounded-md mb-4 border text-center w-full p-2 mt-4 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                    Continue
                </button>
                <div className='text-center'>By proceeding, you agree to  the</div>
                <div className='text-center mb-28'>
                    <a className='text-blue-700 hover:underline cursor-pointer float-left font-medium ml-[25%]' href=''>Terms of Service</a>
                    <div className='float-left ml-1 mr-1'>and</div>
                    <a className='text-blue-700 hover:underline cursor-pointer flex font-medium' href=''>Privacy Policy</a>
                </div>
                <p className='text-center'>Already have an account? <a className='text-blue-700 hover:underline cursor-pointer font-medium'>Log in</a></p>
            </div>
            <div className='w-[40%] '>
                <img className='object-cover w-full h-full' alt='' src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png' />
            </div>
        </div>
    )
}

export default Register