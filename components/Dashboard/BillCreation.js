import { useState } from 'react'
import users from '../../data/users.json'

export default function BillCreation({ close }) {
  const [search, setSearch] = useState('')
  const [addedUsers, setAddedUsers] = useState([])

  return (
    <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 z-20 rounded-md w-full max-w-[85%] transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white'>
        <p className='mb-1.5 font-medium ml-2'>Bill Name</p>
        <input className='bg-gray-100 w-full rounded-md py-2 px-1.5 outline-none mb-3' />

        <div className='relative'>
          <p className='mb-1.5 font-medium ml-2'>Search Friends</p>
          <input className='bg-gray-100 w-full rounded-md py-2 px-1.5 outline-none' value={search} onChange={(e) => setSearch(e.target.value)} />

          {search != '' &&
            <div className='absolute p-2.5 w-full bg-gray-100 mt-2 rounded-md max-h-52 overflow-scroll'>
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
            </div>
          }

          {addedUsers.length > 0 &&
            <div className='flex flex-wrap max-h-[200px] mt-3 overflow-scroll'>
              {addedUsers.map(au => (
                <div
                  key={au.id}
                  onClick={() => setAddedUsers(addedUsers.filter(u => u.id != au.id))}
                  className='p-1 py-2 my-0.5 rounded-lg shadow-xs w-full flex items-center hover:bg-slate-100 transition-all'>
                  <div className='w-8 h-8 rounded-full bg-gray-300 mr-4' />
                  <div>
                    <h1 className='font-medium'> {au.firstName} {au.lastName}</h1>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
        <button className='w-full rounded-md mt-8 bg-[#d6f033] py-2.5' onClick={close}>Create</button>
      </div>
      <div className='w-full h-full top-0 left-0 z-10 absolute bg-black bg-opacity-50' onClick={close} />
    </div >
  )
}
