import React from 'react'
import { SettingsSVG, CreateSVG, HomeSVG, NotificationsSVG, SocialSVG } from '../Util/Icons/DashboardIcons'

export default function TabNavigator({ tab, setTab }) {
  return (
    <div className='px-3 py-3 fixed bottom-[4vh] max-w-[440px] border-t rounded-b-3xl w-full bg-slate-200 grid grid-cols-5'>
      <HomeSVG onclick={() => setTab("Home")} active={tab == 'Home'} />
      <NotificationsSVG onclick={() => setTab("Notifications")} active={tab == 'Notifications'} />
      <CreateSVG onclick={() => setTab("Add Bill")} active={tab == 'Add Bill'} />
      <SocialSVG onclick={() => setTab("Social")} active={tab == 'Social'} />
      <SettingsSVG onclick={() => setTab("Settings")} active={tab == 'Settings'} />
    </div>
  )
}
