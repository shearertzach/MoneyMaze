import React from 'react'

export default function SignUp() {
  return (
    <div className='absolute top-16 w-full flex justify-center items-center flex-col'>
      <h1 className='w-4/6 font-bold text-lg mb-5'>Create your Profile</h1>
      <div className='w-4/6 mb-12'>
        <div className='mx-auto w-24 h-24 rounded-full bg-slate-400' />
      </div>
      <div className='w-4/6 mb-3'>
        <p className='text-lg'>Username</p>
        <input
          className='w-full outline-none py-2 px-1.5 mt-1.5 border-2 border-slate-300'
          type="text"
        />
      </div>
      <div className='w-4/6 mb-3'>
        <p className='text-lg'>Email</p>
        <input
          className='w-full outline-none py-2 px-1.5 mt-1.5 border-2 border-slate-300'
          type="email"
        />
      </div>
      <div className='w-4/6 mb-3'>
        <p className='text-lg'>Phone Number</p>
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
      <button className="w-4/6 text-center bg-slate-300 h-10 bg-opacity-75 hover:bg-opacity-100 transition-all">Sign Up</button>
    </div>
  )
}
