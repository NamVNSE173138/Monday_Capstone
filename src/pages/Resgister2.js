import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PATH } from "../config/path";
import { RightOutlined } from '@ant-design/icons';

const Resgister2 = () => {
    const navigate = useNavigate();
    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-32'>
                <div className='wrapper'>
                    <img className='w-36 mt-[-10%] mb-16' alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                </div>
                <p className='font-bold text-2xl mb-8'>Create your account</p>
                <div className='mb-2'>
                    <section>
                        <label>Full name</label>
                    </section>
                    <input className='border w-[75%] p-3 rounded-md' placeholder='Enter your full name' />
                    <p className='text-sm text-red-500'></p>
                </div>
                <div className='mb-2'>
                    <section>
                        <label>Password</label>
                    </section>
                    <input className='border w-[75%] p-3 rounded-md' placeholder='Enter at least 8 characters' />
                    <p className='text-sm text-red-500'></p>
                </div>
                <div className='mb-28'>
                    <section>
                        <label>Account name</label>
                    </section>
                    <input className='border w-[75%] p-3 rounded-md' placeholder="For example, company's or department's name" />
                    <p className='text-sm text-red-500'></p>
                </div>
                <div className='text-right p-3'>
                    <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer' onClick={() => navigate(PATH.sign_up3)}>
                        Continue
                        <RightOutlined className='text-xs ml-2' />
                    </button>
                </div>
            </div>
            <div className='w-[40%] sm:w-[40%]'>
                <img className='object-cover w-full h-full' alt='' src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png' />
            </div>
        </div>
    )
}

export default Resgister2