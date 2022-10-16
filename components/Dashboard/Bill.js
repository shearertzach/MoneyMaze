import React from 'react'

export default function Bill({ name, date, price, paid }) {
  return (
    <div className={`w-11/12 rounded-md p-2.5 my-1.5 grid grid-cols-2 shadow-sm border ${paid ? "bg-green-100" : "bg-red-100"}`}>
      <div>
        <h1 className='font-medium '>{name}</h1>
        <p className='text-sm'>{date.toLocaleDateString()}</p>
      </div>
      <div className='text-right'>
        <p className='text-lg'>{price}</p>
      </div>
    </div>
  )
}
