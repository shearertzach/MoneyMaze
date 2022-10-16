import React from 'react'

export default function FriendsList({ friends, search }) {
  return (
    <div className='mt-7 overflow-hidden'>
      <button className='mb-7 shadow-xs bg-blue-100 hover:bg-blue-200 w-full py-2.5 rounded-lg transition-all'>Add Friend</button>
      {friends.map(f => (
        <div key={f.id} className={`p-4 bg-white my-1.5 rounded-md shadow-xs`}>
          <h1 className='font-medium'>{f.firstName} {f.lastName}</h1>
          <h3 className='text-sm text-gray-400 ml-2'>{f.email}</h3>
        </div>
      ))}
      {(friends.length < 1 && search.length > 0) && <p className='text-center text-lg'>No friends found.</p>}
      {(friends.length < 1 && search.length < 1) && <p className='text-center text-lg'>There are no users in your friends list :(</p>}
    </div>
  )
}
