import React from 'react'

export default function FriendsList({ friends, search }) {
  return (
    <div className='mt-7'>
      <button className='mb-7 shadow-xs bg-[#d6f033] bg-opacity-70 hover:bg-opacity-100 w-full py-2.5 rounded-lg transition-all'>Add Friend</button>
      {friends.map(f => (
        <div key={f.id} className={`p-2 py-4 rounded-lg shadow-xs flex items-center hover:bg-slate-100 transition-all`}>
          <div className='w-11 h-11 rounded-full bg-gray-300 mr-4' />
          <div>
            <h1 className='font-medium'>{f.firstName} {f.lastName}</h1>
          </div>
        </div>
      ))}
      {(friends.length < 1 && search.length > 0) && <p className='text-center text-lg'>No friends found.</p>}
      {(friends.length < 1 && search.length < 1) && <p className='text-center text-lg'>There are no users in your friends list :(</p>}
    </div>
  )
}
