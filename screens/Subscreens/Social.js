import React, { useEffect, useState } from 'react'
import FriendsList from '../../components/Dashboard/Social/FriendsList'
import GroupsList from '../../components/Dashboard/Social/GroupsList'
import SocialSearch from '../../components/Dashboard/Social/SocialSearch'
import SocialTabs from '../../components/Dashboard/Social/SocialTabs'
import groups from '../../data/groups.json'
import { useSelector } from 'react-redux'
import { getAuthSlice } from '../../redux/auth'


export default function Social() {
  const [tab, setTab] = useState('Friends')
  const [search, setSearch] = useState('')
  const [tempFriends, setTempFriends] = useState([])
  const [tempGroups, setTempGroups] = useState([])
  const auth = useSelector(getAuthSlice)


  useEffect(() => {
    const newF = []
    const newG = []
    if (tab == 'Friends') {
      auth.friends.map(f => {
        const nameLower = f.name.toLowerCase()
        const searchLower = search.toLowerCase()
        if (nameLower.includes(searchLower)) newF.push(f)
      })
      setTempFriends(newF)
    }
    if (tab == 'Groups') {
      groups.map(g => {
        const groupLower = g.name.toLowerCase()
        const searchLower = search.toLowerCase()
        if (groupLower.includes(searchLower)) newG.push(g)
      })
      setTempGroups(newG)
    }
  }, [search])

  return (
    <div className='p-4 h-full overflow-scroll py-20'>
      <SocialSearch value={search} change={setSearch} />
      <SocialTabs tab={tab} setTab={setTab} />
      {tab == 'Friends' && <FriendsList friends={search.length > 0 ? tempFriends : auth.friends} search={search} />}
      {tab == 'Groups' && <GroupsList groups={search.length > 0 ? tempGroups : groups} search={search} />}
    </div>
  )
}
