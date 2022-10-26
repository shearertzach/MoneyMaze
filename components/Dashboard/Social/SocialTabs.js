export default function SocialTabs({ tab, setTab }) {
  return (
    <div className='w-fullflex items-center justify-between mt-3.5'>
      <button
        className={`w-full py-3.5 bg-[#d6f033] ${tab == 'Friends' ? 'bg-opacity-100' : 'bg-opacity-70'} hover:bg-opacity-100 transition-all rounded-md`}
        onClick={() => setTab('Friends')}
      >
        Friends
      </button>
      {/* <button
        className={`w-1/2 py-3.5 bg-[#d6f033] ${tab == 'Groups' ? 'bg-opacity-100' : 'bg-opacity-70'} hover:bg-opacity-100 transition-all rounded-r-md`}
        onClick={() => setTab('Groups')}
      >
        Groups
      </button> */}
    </div>
  )
}
