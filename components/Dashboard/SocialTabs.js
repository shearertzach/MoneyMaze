export default function SocialTabs({ tab, setTab }) {
  return (
    <div className='w-fullflex items-center justify-between mt-3.5'>
      <button
        className={`w-1/2 py-2 bg-white ${tab == 'Friends' ? 'bg-gray-300' : 'hover:bg-gray-200'} rounded-l-md`}
        onClick={() => setTab('Friends')}
      >
        Friends
      </button>
      <button
        className={`w-1/2 py-2 bg-white ${tab == 'Groups' ? 'bg-gray-300' : 'hover:bg-gray-200'} rounded-r-md`}
        onClick={() => setTab('Groups')}
      >
        Groups
      </button>
    </div>
  )
}
