import React, { useState } from 'react'

export default function FriendSearchModal({ close, friends, addFriend, addedFriends }) {
  return (
    <div className='absolute w-full h-full top-0 right-0'>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-white rounded-md z-20 max-w-[85%] w-full'>
        <h2>Friends</h2>
        <div className='p-2 w-full bg-gray-100 mt-2 rounded-md max-h-[400px] overflow-scroll'>
          {friends.map(f => {
            if (!addedFriends.includes(f)) return (
              <button
                key={f.id}
                onClick={() => {
                  addFriend([...addedFriends, f])
                  close()
                }}
                className='w-full text-left p-2.5 hover:bg-white transition-all rounded-md'
              >
                {f.name}
              </button>
            )
          })}
        </div>
      </div>
      <div className='absolute w-full h-full top-0 right-0 bg-black bg-opacity-60 z-10' onClick={close} />
    </div >
  )
}
