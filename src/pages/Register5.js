import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react'

const Register5 = () => {

    const items = [
        {
            label: 'Admin',
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: 'Member',
            key: '1',
        },
    ];

    const [selectedRole, setSelectedRole] = useState('Admin');

    const handleMenuClick = ({ key }) => {
        setSelectedRole(items.find(item => item.key === key)?.label || '');
    };
    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-32'>
                <div className='wrapper'>
                    <img className='w-36 mt-[-10%] mb-16' alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                </div>
                <p className='font-bold text-2xl mb-8'>Who else is on your team?</p>
                <div className='mb-2'>
                    <section className='mb-2'>
                        <label className='text-sm'>Invite with link (anyone with a @ email)</label>
                    </section>
                </div>
                <div>
                    <div className='mb-3'>
                        <input className='border w-[60%] p-2 rounded-sm' placeholder='Add email here' />
                        <Dropdown className='border rounded-sm p-[9.2px]'
                            trigger={['click']}
                            overlay={
                                <Menu onClick={handleMenuClick} selectedKeys={[selectedRole]}>
                                    {items.map(item => (
                                        <Menu.Item key={item.key}>
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                        >
                            <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedRole} <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        <input className='border w-[60%] p-2 rounded-sm' placeholder='Add email here' />
                        <Dropdown className='border rounded-sm p-[9.2px]'
                            trigger={['click']}
                            overlay={
                                <Menu onClick={handleMenuClick} selectedKeys={[selectedRole]}>
                                    {items.map(item => (
                                        <Menu.Item key={item.key}>
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                        >
                            <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedRole} <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <button className='text-center rounded-md mb-4 w-[20%] p-2 mt-2 text-black hover:bg-gray-300 cursor-pointer text-sm'>
                        <PlusOutlined className='text-sm' /> Add another
                    </button>
                </div>
                <div className='flex justify-between mt-[30%]'>
                    <button className='text-center rounded-md mb-4 w-[25%] p-2 mt-2 text-black hover:bg-gray-300 cursor-pointer' >
                        Remind me later
                    </button>
                    <button className='text-center rounded-md mb-4 border w-[20%] p-2 mt-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'>
                        Invite your team
                    </button>
                </div>
            </div>
            <div className='w-[40%] sm:w-[40%]'>
                <img className='object-cover w-full h-full' alt='' src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png' />
            </div>
        </div>
    )
}

export default Register5