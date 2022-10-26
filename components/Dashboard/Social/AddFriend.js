import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFriend } from '../../../redux/auth'
import { v4 as uuidv4 } from 'uuid';

export default function AddFriend({ close }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <div className='z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-9/12 p-4 rounded-md'>
        <div className='text-center'>
          <p className='text-lg'>Invite Friends to be</p>
          <p className='text-xl font-bold'>MONEYMATES</p>
        </div>
        <div className='mt-5'>
          <p className='text-sm text-slate-400 ml-3'>Name</p>
          <input className='w-full p-2 rounded-md bg-slate-100 border border-slate-300' value={name} onChange={(e) => setName(e.target.value)} />
          <p className='text-sm text-slate-400 ml-3 mt-5'>Email Address</p>
          <input className='w-full p-2 rounded-md bg-slate-100 border border-slate-300' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button
          className='rounded-md bg-black text-white w-full py-3 mt-8'
          onClick={() => {
            if (email && name) {
              dispatch(addFriend({ id: uuidv4(), name, email }))
              close()
            }
          }}
        >Add Friend</button>
      </div>
      <div className='z-10 absolute top-0 left-0 w-full h-full bg-black bg-opacity-75' onClick={close} />
    </div>
  )
}
