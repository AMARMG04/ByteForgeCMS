import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

const page = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className='relative flex flex-col border-r-2 border-black h-screen lg:w-2/6 xl:w-1/5'>
                    <SideBar />
                </div>

                <div className='p-8 lg:w-5/6 xl:w-4/5'>
                    <TopBar />
                </div>
            </div>
        </div>
    )
}

export default page
