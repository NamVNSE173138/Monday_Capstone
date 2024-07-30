import React, { useState } from 'react';
import { Table } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const Board = () => {
    const [state, setState] = useState({ name: '' });

    const handleOnChangeName = (event) => {
        setState({ name: event.target.value });
    }

    const dataSource = [
        { key: '1', name: '-', age: '-', address: '-' },
        { key: '2', name: '-', age: '-', address: '-' },
        // Add more data as needed
    ];

    const columns = [
        { title: '-', dataIndex: 'name', key: 'name' },
        { title: '-', dataIndex: 'age', key: 'age' },
        { title: '-', dataIndex: 'address', key: 'address' },
        { title: '-', dataIndex: 'address', key: 'address' },
        // Add more columns as needed
    ];

    return (
        <div className='flex-1 flex h-screen'>
            <div className='flex-1 p-40'>
                <div className='wrapper'>
                    <img className='w-36 mt-[-10%] mb-16' alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                </div>
                <p className='text-2xl font-semibold mb-8'>Let's start working together</p>
                <p className='text-sm mb-2'>Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap...</p>
                <div>
                    <input value={state.name.substring(0, 25)} className='appearance-none focus:outline-none border w-full rounded-md p-2 mb-10 hover:border-black cursor-text' placeholder='My first board' onChange={(event) => handleOnChangeName(event)} />
                </div>
                <div className='bg-gray-100 rounded-md p-6'>
                    In monday.com, "boards" are the place where all your content lives
                </div>
                <div className='text-right mt-20'>
                    <button
                        type='button'
                        className={`text-center rounded-md mb-4 border w-[20%] p-2 mt-2 ${!state.name ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-800 cursor-pointer'}`}
                        disabled={!state.name}
                    >
                        Next
                        <RightOutlined className='text-xs ml-2' />
                    </button>
                </div>

            </div>
            <div className='w-[50%] bg-blue-50 '>
                <div className='bg-white ml-20 mt-16 p-10 shadow-2xl'>
                    <div className='w-[30%] mb-10'>
                        {state.name === null || state.name === undefined || state.name === '' ? (
                            <div className='w-[150%] p-1 rounded-md bg-gray-500 mt-8'></div>
                        ) : (
                            <input
                                type='button'
                                className=' text-center appearance-none border-none focus:outline-none text-gray-600 overflow-hidden text-xl font-bold'
                                style={{ lineHeight: '2' }}
                                value={state.name}
                                placeholder="Board's name"
                            />
                        )}
                    </div>
                    <div className='w-[25%] p-1 rounded-md border bg-blue-600 mb-5'></div>
                    <div>
                        <Table className='mb-8' dataSource={dataSource} columns={columns} bordered={true} pagination={false} />
                    </div>
                    <div className='w-[25%] p-1 rounded-md border bg-green-600 mb-5'></div>
                    <div>
                        <Table className='mb-8' dataSource={dataSource} columns={columns} bordered={true} pagination={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
