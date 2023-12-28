import React, { useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Radio } from 'antd';


const Register3 = () => {
    const [value, setValue] = useState();
    const [subcategory, setSubcategory] = useState();
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        setSubcategory(null);
    };

    const onSubChange = (e) => {
        console.log('Subcategory radio checked', e.target.value);
        setSubcategory(e.target.value);
    };


    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-32'>
                <div className='wrapper'>
                    <img className='w-36 mt-[-10%] mb-16' alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                </div>
                <p className='mb-5 text-2xl font-medium'>Hey there, what brings you here today?</p>
                <div className='mb-10'>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio className='rounded-3xl border p-2 mb-2 mr-5' value="work">Work</Radio>
                        <Radio className='rounded-3xl border p-2 mb-2 mr-5' value="personal">Personal</Radio>
                        <Radio className='rounded-3xl border p-2 mb-2 mr-5' value="school">School</Radio>
                        <Radio className='rounded-3xl border p-2 mb-2 mr-5' value="nonprofits">Nonprofits</Radio>
                    </Radio.Group>
                </div>
                {value === 'work' && (
                    <div>
                        <p className='mb-8 text-2xl font-medium'>What best describes your current role?</p>
                        <div className='mt-4'>
                            <Radio.Group onChange={onSubChange} value={subcategory}>
                                <Radio className='rounded-3xl border p-2 mb-5 mr-3 ' value="business-owner">Business owner</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-leader">Team leader</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-member">Team member</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="freelancer">Freelancer</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="director">Director</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="c-level">C-Level</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="VP">VP</Radio>
                            </Radio.Group>
                        </div>
                        <div className='text-right p-3 mt-36'>
                            <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                                Continue
                                <RightOutlined className='text-xs ml-2' />
                            </button>
                        </div>
                    </div>
                )}
                {value === 'personal' && (
                    <div className='text-right p-3 mt-[355.5px]'>
                        <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                            Continue
                            <RightOutlined className='text-xs ml-2' />
                        </button>
                    </div>
                )}
                {value === 'school' && (
                    <div>
                        <p className='mb-8 text-2xl font-medium'>What best describes your current role?</p>
                        <div className='mt-4'>
                            <Radio.Group onChange={onSubChange} value={subcategory}>
                                <Radio className='rounded-3xl border p-2 mb-5 mr-3 ' value="business-owner">Undergraduate student</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-leader">Graduate student</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-member">Faculty member</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="freelancer">Other</Radio>
                            </Radio.Group>
                        </div>
                        <div className='text-right p-3 mt-48'>
                            <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                                Continue
                                <RightOutlined className='text-xs ml-2' />
                            </button>
                        </div>
                    </div>
                )}
                {value === 'nonprofits' && (
                    <div>
                        <p className='mb-8 text-2xl font-medium'>What best describes your current role?</p>
                        <div className='mt-4'>
                            <Radio.Group onChange={onSubChange} value={subcategory}>
                                <Radio className='rounded-3xl border p-2 mb-5 mr-3 ' value="business-owner">Board member</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-leader">Executive</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="team-member">Employee</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="freelancer">Volunteer</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="director">IT Staff</Radio>
                                <Radio className='rounded-3xl border p-2 mb-2 mr-3' value="c-level">Other</Radio>
                            </Radio.Group>
                        </div>
                        <div className='text-right p-3 mt-36'>
                            <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                                Continue
                                <RightOutlined className='text-xs ml-2' />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className='w-[40%] '>
                <img className='object-cover w-full h-full' alt='' src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png' />
            </div>
        </div>
    )
}

export default Register3