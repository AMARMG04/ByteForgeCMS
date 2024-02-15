import React, { useState } from 'react'
import SideBar from '@/app/components/SideBar'
import TopBar from '@/app/components/TopBar'
import Form from '@/app/components/Form'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className='relative flex flex-col border-r-2 border-black h-screen lg:w-2/6 xl:w-1/5'>
                    <SideBar />
                </div>

                <div className='p-8 lg:w-5/6 xl:w-4/5 h-screen overflow-y-auto'>
                    <TopBar />
                    <h1 className='mt-4 text-3xl font-semibold'>Add New Product</h1>

                    <div className='mt-4'>
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
