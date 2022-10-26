import React from 'react'
import { SearchSVG } from '../../Util/Icons/Other'

export default function SocialSearch({ value, change }) {
  return (
    <div className='w-full border-2 flex items-center justify-between rounded-md '>
      <input
        value={value}
        onChange={(e) => change(e.target.value)}
        className='p-2.5 w-11/12 outline-none rounded-l-md'
      />
      <SearchSVG className={'w-1/12 text-slate-400'} />
    </div>
  )
}
