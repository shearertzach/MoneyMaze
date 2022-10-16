import { useState } from 'react'
import users from '../../data/users.json'

export default function ActivityCreation({ close }) {
  const [search, setSearch] = useState('')
  const [addedUsers, setAddedUsers] = useState([])

  return (
    <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 z-20 rounded-md w-full max-w-[85%] transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white'>
        <p className='mb-1.5'>Activity Name</p>
        <input className='bg-gray-100 w-full rounded-md py-2 px-1.5 outline-none mb-3' />

        <div className='relative'>
          <p className='mb-1.5'>Search Friends</p>
          <input className='bg-gray-100 w-full rounded-md py-2 px-1.5 outline-none' value={search} onChange={(e) => setSearch(e.target.value)} />
          {search != '' && <div className='absolute p-2.5 w-full bg-gray-100 mt-2 rounded-md max-h-52 overflow-scroll'>
            {users.map(u => {
              const nameLower = u.firstName.toLowerCase() + ' ' + u.lastName.toLowerCase()
              const searchLower = search.toLowerCase()
              if (nameLower.includes(searchLower)) return (
                <button
                  key={u.id}
                  onClick={() => {
                    setAddedUsers([...addedUsers, u])
                    setSearch('')
                  }}
                  className='w-full text-left my-1.5'
                >
                  {u.firstName} {u.lastName}
                </button>
              )
            })}
          </div>}
          {addedUsers.length > 0 && <p className='mt-3 mb-1.5'>Added Friends</p>}
          <div className='flex flex-wrap'>
            {addedUsers.map(au => (
              <p key={au.id} onClick={() => setAddedUsers(addedUsers.filter(u => u.id != au.id))} className='px-2 py-1 bg-gray-100 rounded-lg mr-2 mb-1.5 cursor-pointer hover:bg-gray-200 transition-all'>{au.firstName} {au.lastName}</p>
            ))}
          </div>
        </div>
        <button className='w-full rounded-md mt-12 bg-green-200 py-2.5' onClick={close}>Create</button>
      </div>
      <div className='w-full h-full top-0 left-0 z-10 absolute bg-black bg-opacity-50' onClick={close} />
    </div >
  )
}
