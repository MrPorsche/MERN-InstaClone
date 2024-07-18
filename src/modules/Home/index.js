import React from 'react'
import {ReactComponent as Avatar} from '../../assets/avatars/avatar-svgrepo-com.svg'

const Home = () => {
  return (
    <div className='h-screen bg-[#D2CFDF] flex overflow-hidden'>
        <div className='w-[20%] flex flex-col'>
            <div className='h-[30%] bg-blue-100 flex justify-center items-center'>
                <div>
                    <Avatar className='w-[75px] h-[75px] rounded-full' />
                    <p className='my-2'>Tom Cruise</p>
                    <div className="h-[50px] border"></div>
                </div>
            </div>
            <div className='h-[55%] bg-blue-200'></div>
            <div className='h-[15%] bg-blue-300'></div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>
            <div className='h-[1500px]'>Home Page</div>
        </div>
        <div className='w-[20%] bg-slate-500'></div>
    </div>
  )
}

export default Home