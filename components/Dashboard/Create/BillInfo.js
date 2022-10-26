import React, { useState } from 'react'
import FriendSearchModal from './FriendSearchModal'

export default function BillInfo({ friends, addedFriends, setAddedFriends, billName, setBillName, next }) {
  const [friendsModal, setFriendsModal] = useState(false)



  return (
    <div className='w-full h-full bg-white p-8'>
      <div>
        <h2 className='mb-4'>Bill Information</h2>
        <p className='text-sm text-gray-400 ml-2'>Name</p>
        <input className='border-2 w-full rounded-md py-2 px-1.5 outline-none mb-3' value={billName} onChange={(e) => setBillName(e.target.value)} />
        <p className='text-sm text-gray-400 ml-2'>Creation Date</p>
        <input className='border-2 w-full rounded-md py-2 px-1.5 outline-none mb-3 text-slate-400' disabled value={new Date().toLocaleDateString()} />
      </div>
      <h2 className='my-2.5'>Party</h2>
      <button onClick={() => setFriendsModal(!friendsModal)} className='text-center border-2 border-black rounded-md py-3 w-full hover:bg-black hover:text-[#d6f033] transition-all'>Add Friends or Group +</button>
      {(addedFriends.length > 0) &&
        <div className='flex flex-wrap max-h-[40%] overflow-scroll p-2 mt-5 bg-gray-100 rounded-md'>
          {addedFriends.map(af => (
            <div
              key={af.id}
              onClick={() => setAddedFriends(addedFriends.filter(f => f.id != af.id))}
              className='p-1 py-2 my-0.5 rounded-lg shadow-xs w-full flex items-center hover:bg-red-100 transition-all cursor-pointer'>
              <div className='w-8 h-8 rounded-full bg-gray-300 mr-4' />
              <div>
                <h1>{af.name}</h1>
              </div>
            </div>
          ))}
        </div>
      }
      {(billName && addedFriends.length > 0) && <button onClick={next} className='text-center border-2 border-black bg-black text-white rounded-md py-3 w-11/12 transition-all mt-5 absolute bottom-[80px] left-[20px]'>Next</button>}
      {friendsModal && <FriendSearchModal friends={friends} addedFriends={addedFriends} addFriend={setAddedFriends} close={() => setFriendsModal(false)} />}
    </div>
  )
}
