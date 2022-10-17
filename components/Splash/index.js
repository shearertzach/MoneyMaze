import React from 'react'
import { useDispatch } from 'react-redux'
import { signin, signout } from '../../redux/auth'

export default function SplashDefault({ setType }) {
  const dispatch = useDispatch()

  return (
    <div className='absolute bottom-[15%] w-full flex justify-center items-center flex-col'>
      <button onClick={() => dispatch(signin())} className="w-4/5 text-center bg-slate-400 h-14 bg-opacity-50 hover:bg-opacity-75 hover:scale-x-105 transition-all">Get Started</button>
      {/* <h3 className="mt-4">Already have an account?
        <button onClick={() => setType('Log In')} href="/login" className="font-bold ml-1 transition-all hover:text-blue-800">Log In</button>
      </h3> */}
    </div>
  )
}
