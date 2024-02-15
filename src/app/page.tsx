import Image from 'next/image'
import Link from 'next/link'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'


export default function Home() {

  return (
    <>
      <div className="flex flex-row">
        <div className='relative flex flex-col border-r-2 border-black h-screen lg:w-2/6 xl:w-1/5'>
          <SideBar />
        </div>

        <div className='p-8 lg:w-5/6 xl:w-4/5'>
          <TopBar />
          <h1 className='mt-4 text-2xl font-medium'>Orders</h1>
          <div className='w-full h-4/5 border-2 border-black rounded-sm mt-2'>

          </div>
        </div>
      </div>
    </>
  )
}
