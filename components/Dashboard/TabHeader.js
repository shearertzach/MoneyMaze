import React from 'react'
import { PreviousSVG } from '../Util/Icons/Other'


export default function TabHeader({ tab, subtab, close }) {
  return (
    <div className='py-5 absolute w-full top-0 bg-[#333333] text-white text-center text-xl font-medium shadow-sm'>
      <h2>{tab}</h2>
      {subtab && <PreviousSVG className={'absolute top-[22.5px] left-4'} onclick={close} />}
    </div>
  )
}
