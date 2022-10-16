import React from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux/auth'


export default function LogIn() {
  const dispatch = useDispatch()

  return (
    <div className='absolute bottom-[10%] w-full flex justify-center items-center flex-col'>
      <div className='w-4/6 mb-5'>
        <p className='text-lg'>Username</p>
        <input
          className='w-full outline-none py-2 px-1.5 mt-1.5 border-2 border-slate-300'
          type="text"
        />
      </div>
      <div className='w-4/6 mb-12'>
        <p className='text-lg'>Password</p>
        <input
          className='w-full outline-none py-2 px-1.5 mt-1.5 border-2 border-slate-300'
          type="password"
        />
      </div>
      <button onClick={() => dispatch(signin())} className="w-4/6 text-center bg-slate-300 h-14 bg-opacity-75 hover:bg-opacity-100 transition-all">Log In</button>
    </div>
  )
}
