import { useState } from 'react'
import { PreviousSVG } from '../../Util/Icons/Other'
import UserSearchModal from './FriendSearchModal'

export default function ActivityCreation({ type, close }) {
  const [usersModal, setUsersModal] = useState(false)
  const [addedUsers, setAddedUsers] = useState([])

  return (
    <div className='w-full h-full absolute top-0 left-0 rounded-3xl overflow-hidden py-16'>
      {usersModal && <UserSearchModal addedUsers={addedUsers} addUser={setAddedUsers} close={() => setUsersModal(false)} />}
      <div className='py-5 absolute w-full top-0 bg-[#333333] text-white text-center text-xl font-medium shadow-sm'>
        <h2>Create New {type}</h2>
        <PreviousSVG className={'absolute top-[22.5px] left-4'} onclick={close} />
      </div>
      <div className='w-full h-full bg-white p-8'>
        <h2 className='mb-4'>Activity Information</h2>
        <div className='p-2'>
          <p className='text-sm text-gray-400 ml-2'>Name</p>
          <input className='border-2 w-full rounded-md py-2 px-1.5 outline-none mb-3' />
          <p className='text-sm text-gray-400 ml-2'>Creation Date</p>
          <input className='border-2 w-full rounded-md py-2 px-1.5 outline-none mb-3 text-slate-400' disabled value={new Date().toLocaleDateString()} />
        </div>
        <h2 className='my-4'>Party</h2>
        <button onClick={() => setUsersModal(!usersModal)} className='text-center border-2 border-black rounded-md py-3 w-full hover:bg-black hover:text-[#d6f033] transition-all'>Add Friends or Group +</button>

        {addedUsers.length > 0 &&
          <div className='flex flex-wrap max-h-[285px] h-full overflow-scroll p-2 mt-5 bg-gray-100 rounded-md'>
            {addedUsers.map(au => (
              <div
                key={au.id}
                onClick={() => setAddedUsers(addedUsers.filter(u => u.id != au.id))}
                className='p-1 py-2 my-0.5 rounded-lg shadow-xs w-full flex items-center hover:bg-red-100 transition-all cursor-pointer'>
                <div className='w-8 h-8 rounded-full bg-gray-300 mr-4' />
                <div>
                  <h1> {au.firstName} {au.lastName}</h1>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div >
  )
}
