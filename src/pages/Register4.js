import { Checkbox } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PATH } from '../config/path';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Register4 = () => {
    const navigate = useNavigate();
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-32'>
                <div className='wrapper'>
                    <img className='w-36 mt-[-10%] mb-16' alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                </div>
                <p className='mb-5 text-2xl font-medium'>One last question, how did you hear about us?</p>
                <div className='mb-10'>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Software review sites</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Audio ad (Podcast, Spotify)</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Youtube ad</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Friend / Colleague</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>TV / Streaming service</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Search engine (Google, Bing, etc.)</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Consultant</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Social media (Facebook, Instagram, Reddit, etc)</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>LinkedIn</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Billboard / Public transit ad</Checkbox>
                    <Checkbox className='text-base rounded-3xl border p-2 mb-4 mr-5' onChange={onChange}>Other</Checkbox>
                </div>
                <div className='flex justify-between mt-[20%]'>
                    <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 text-black hover:bg-gray-300 cursor-pointer' onClick={() => navigate(PATH.sign_up3)}>
                        <LeftOutlined className='text-xs mr-2' />
                        Back
                    </button>

                    <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer' onClick={() => navigate(PATH.sign_up5)}>
                        Continue
                        <RightOutlined className='text-xs ml-2' />
                    </button>
                </div>
            </div>
            <div className='w-[40%] '>
                <img className='object-cover w-full h-full' alt='' src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png' />
            </div>
        </div>
    )
}

export default Register4