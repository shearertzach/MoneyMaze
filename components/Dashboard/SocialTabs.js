export default function SocialTabs({ tab, setTab }) {
  return (
    <div className='w-full bg-white flex items-center justify-between rounded-md overflow-hidden mt-3.5'>
      <button
        className={`w-1/2 py-2 ${tab == 'Friends' ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
        onClick={() => setTab('Friends')}
      >
        Friends
      </button>
      <button
        className={`w-1/2 py-2 ${tab == 'Groups' ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
        onClick={() => setTab('Groups')}
      >
        Groups
      </button>
    </div>
  )
}
