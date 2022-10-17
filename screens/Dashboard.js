import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TabNavigator from '../components/Dashboard/TabNavigator'
import AddBill from './Subscreens/AddBill'
import Home from './Subscreens/Home'
import Notifications from './Subscreens/Notifications'
import Settings from './Subscreens/Settings'
import Social from './Subscreens/Social'



export default function Dashboard() {
  const dispatch = useDispatch()
  const [tab, setTab] = useState('Home')

  return (
    <div className='relative h-full py-16 rounded-3xl overflow-hidden'>
      <div className='py-5 absolute w-full top-0 bg-slate-200  text-center text-xl font-medium shadow-sm'>
        <h2>{tab}</h2>
      </div>
      {tab == 'Home' && <Home />}
      {tab == 'Notifications' && <Notifications />}
      {tab == 'Add Bill' && <AddBill />}
      {tab == 'Social' && <Social />}
      {tab == 'Settings' && <Settings />}
      <TabNavigator tab={tab} setTab={setTab} />
    </div>
  )
}
