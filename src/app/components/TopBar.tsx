import React from 'react'

const TopBar = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-4xl font-medium inline-block'>Hello</h1><span className='text-4xl font-normal ml-2'>Kalvidhasan S</span>
                    <p>Welcome Back!</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <button className=' bg-black text-white px-8 py-4 rounded-sm font-medium'>
                            Profile
                        </button>
                    </div>
                    <div>
                        <button className=' bg-indigo-700 text-white px-8 py-4 rounded-sm font-medium'>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
