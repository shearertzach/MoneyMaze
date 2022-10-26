import React from 'react'
import { MoneySVG } from '../Util/Icons/Other'

export default function Bill({ b, setBill }) {
  return (
    <div
      onClick={() => setBill(b)}
      className={`w-11/12 rounded-md my-1.5 flex gap-6 cursor-pointer transition-all items-center hover:bg-gray-200 bg-opacity-10 p-2`}
    >
      <MoneySVG className={'bg-slate-100 p-3 rounded-full text-slate-800'} />
      <div>
        <p className='text-lg font-medium'>{b.name}</p>
        <p className='text-sm text-slate-400'>{b.date}</p>
        <p className='text-sm text-green-400'>Paid by [Name]</p>
      </div>
      <p className='ml-auto text-xl font-medium'>${b.total.toFixed(2)}</p>
    </div>
  )
}
