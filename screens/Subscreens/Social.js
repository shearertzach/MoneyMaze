import React, { useEffect, useState } from 'react'
import FriendsList from '../../components/Dashboard/FriendsList'
import GroupsList from '../../components/Dashboard/GroupsList'
import SocialSearch from '../../components/Dashboard/SocialSearch'
import SocialTabs from '../../components/Dashboard/SocialTabs'
import users from '../../data/users.json'
import groups from '../../data/groups.json'


export default function Social() {
  const [tab, setTab] = useState('Friends')
  const [search, setSearch] = useState('')
  const [tempFriends, setTempFriends] = useState([])
  const [tempGroups, setTempGroups] = useState([])


  useEffect(() => {
    const newU = []
    const newG = []
    if (tab == 'Friends') {
      users.map(u => {
        const nameLower = u.firstName.toLowerCase() + ' ' + u.lastName.toLowerCase()
        const searchLower = search.toLowerCase()
        if (nameLower.includes(searchLower)) newU.push(u)
      })
      setTempFriends(newU)
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
    <div className='p-4'>
      <SocialSearch value={search} change={setSearch} />
      <SocialTabs tab={tab} setTab={setTab} />
      {tab == 'Friends' && <FriendsList friends={search.length > 0 ? tempFriends : users} search={search} />}
      {tab == 'Groups' && <GroupsList groups={search.length > 0 ? tempGroups : groups} search={search} />}
    </div>
  )
}
