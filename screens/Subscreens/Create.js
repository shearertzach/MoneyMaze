import React, { useState } from 'react'
import ActivityCreation from '../../components/Dashboard/Create/ActivityCreation'
import BillCreation from '../../components/Dashboard/Create/BillCreation'

export default function Create() {
  const [creationType, setCreationType] = useState(null)

  return (
    <div className='h-full w-full relative flex items-center justify-center flex-col'>
      <button className='bg-[#d6f033] bg-opacity-80 hover:bg-opacity-100 py-20 w-full max-w-[65%] rounded-xl font-medium mb-3 transition-all' onClick={() => setCreationType('Bill')}>Create Bill</button>
      {/* <button className='bg-[#d6f033] bg-opacity-80 hover:bg-opacity-100 py-20 w-full max-w-[65%] rounded-xl font-medium mt-3 transition-all' onClick={() => setCreationType('Activity')}>Create Activity</button> */}
      {creationType == 'Bill' && <BillCreation type={creationType} close={() => setCreationType(null)} />}
      {/* {creationType == 'Activity' && <ActivityCreation type={creationType} close={() => setCreationType(null)} />} */}
    </div>
  )
}
