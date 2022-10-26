import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TabNavigator from '../components/Dashboard/TabNavigator'
import Create from './Subscreens/Create'
import Home from './Subscreens/Home'
import Notifications from './Subscreens/Notifications'
import Settings from './Subscreens/Settings'
import Social from './Subscreens/Social'



export default function Dashboard() {
  const dispatch = useDispatch()
  const [tab, setTab] = useState('Home')

  return (
    <div className='relative h-full rounded-3xl overflow-hidden font-[Montserrat]' >
      <div className='py-5 absolute w-full top-0 bg-[#333333] text-white text-center text-xl font-medium shadow-sm'>
        <h2>{tab}</h2>
      </div>
      {/* {tab == 'Home' && <Home />} */}
      {/* {tab == 'Notifications' && <Notifications />} */}
      {/* {tab == 'Create' && <Create />} */}
      {/* {tab == 'Social' && <Social />} */}
      {tab == 'Settings' && <Settings />}
      <TabNavigator tab={tab} setTab={setTab} />
    </div>
  )
}
