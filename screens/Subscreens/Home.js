import React from 'react'
import bills from '../../data/bills.json'
import Bill from '../../components/Dashboard/Bill'

export default function Home() {
  return (
    <div className='p-4 h-full overflow-scroll'>
      {/* <h1 className='text-xl my-3'>Your Bills</h1>
      <div className='flex justify-center items-center flex-col'>
        {bills.map(b => <Bill
          key={b.id}
          name={b.name}
          date={new Date(b.date)}
          price={b.totalPrice}
          paid={b.paid}
        />)}
      </div> */}
    </div>
  )
}
