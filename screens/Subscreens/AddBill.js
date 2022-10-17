import React, { useState } from 'react'
import ActivityCreation from '../../components/Dashboard/ActivityCreation'
import BillCreation from '../../components/Dashboard/BillCreation'

export default function AddBill() {
  const [creationType, setCreationType] = useState(null)

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <button className='bg-[#d6f033] bg-opacity-80 hover:bg-opacity-100 py-20 w-full max-w-[65%] rounded-xl font-medium mb-3 transition-all' onClick={() => setCreationType('Bill')}>Create a new bill</button>
      <button className='bg-[#d6f033] bg-opacity-80 hover:bg-opacity-100 py-20 w-full max-w-[65%] rounded-xl font-medium mt-3 transition-all' onClick={() => setCreationType('Activity')}>Create a new activity</button>
      {creationType == 'Bill' && <BillCreation close={() => setCreationType(null)} />}
      {creationType == 'Activity' && <ActivityCreation close={() => setCreationType(null)} />}
    </div>
  )
}
