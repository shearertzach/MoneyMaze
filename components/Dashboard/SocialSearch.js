import React from 'react'
import { SearchSVG } from '../Util/Icons/Other'

export default function SocialSearch({ value, change }) {
  return (
    <div className='w-full bg-white flex items-center justify-between rounded-md overflow-hidden'>
      <input
        value={value}
        onChange={(e) => change(e.target.value)}
        className='p-2.5 w-11/12 outline-none'
      />
      <SearchSVG className={'w-1/12'} />
    </div>
  )
}
