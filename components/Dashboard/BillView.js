import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editBill, getAuthSlice } from '../../redux/auth'
import { PreviousSVG } from '../Util/Icons/Other'


export default function BillView({ billid, close }) {
  const dispatch = useDispatch()
  const auth = useSelector(getAuthSlice)
  const bill = auth.bills[auth.bills.findIndex(b => b.id == billid)]

  return (
    <div className='absolute top-0 left-0 h-full w-full bg-white z-20 pt-[150px]'>
      <div className='py-5 absolute w-full top-0 bg-[#d6f033] shadow-sm pl-[70px]'>
        <div className='grid grid-cols-2 items-center'>
          <div>
            <h2 className='text-xl font-medium'>{bill.name}</h2>
            <h2 className='text-slate-700 text-sm'>{bill.date}</h2>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p>{bill.users.length}</p>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-5 w-full'>
          <div>
            <p className='text-slate-700'>Total Price</p>
            <p className='text-xl'>${bill.total}</p>
          </div>
          <div>
            <p className='text-slate-700'>You Owe</p>
            <p className='text-xl'>${bill.pricePerPerson}</p>
          </div>
        </div>
        <PreviousSVG className={'absolute top-[22.5px] left-4'} onclick={close} />
      </div>
      <p className='mt-5 ml-3.5 font-semibold'>Items</p>
      <div className='max-h-[75%] overflow-scroll p-5 mt-2 rounded-md'>
        {bill.items.map(i => (
          <div key={i.id} className='flex justify-between'>
            <p>{i.name.toUpperCase()}</p>
            <p>${i.price}</p>
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 left-0 py-4 w-full bg-slate-100 overflow-y-hidden overflow-x-scroll whitespace-nowrap'>
        {bill.users.map(u => (
          <div key={u.id} className='mx-3 overflow-hidden inline-block w-16 text-center' onClick={() => dispatch(editBill({ billid: bill.id, userid: u.id }))}>
            <div className={`w-12 h-12 rounded-full ${u.paid ? 'bg-green-200' : 'bg-slate-200'} mx-auto`} />
            <p>{u.name.slice(0, 6)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
