import React from 'react'

export default function GroupsList({ groups, search }) {
  return (
    <div className='mt-7'>
      <button className='mb-7 shadow-xs bg-[#d6f033] bg-opacity-70 hover:bg-opacity-100 w-full py-2.5 rounded-lg transition-all'>Add Group</button>
      {groups.map(g => (
        <div key={g.name} className={`p-2 py-4 bg-white rounded-md shadow-xs grid grid-cols-6 hover:bg-slate-100 transition-all`}>
          <div className='col-span-5'>
            <h1>{g.name}</h1>
            <h3 className='text-sm text-gray-400 ml-2'>{g.created}</h3>
          </div>
          <div className='col-span-1 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className='ml-2'>{g.users}</p>
          </div>
        </div>
      ))}
      {(groups.length < 1 && search.length > 0) && <p className='text-center text-lg'>No gruops found.</p>}
      {(groups.length < 1 && search.length < 1) && <p className='text-center text-lg'>There are no users in your groups list :(</p>}
    </div>
  )
}
