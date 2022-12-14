import React from 'react'
import { SettingsSVG, CreateSVG, HomeSVG, NotificationsSVG, SocialSVG } from '../Util/Icons/DashboardIcons'

export default function TabNavigator({ tab, setTab }) {
  return (
    <div className='px-3 py-4 absolute bottom-0 border-t-2 w-full bg-white grid grid-cols-5'>
      <HomeSVG onclick={() => setTab("Home")} active={tab == 'Home'} />
      <NotificationsSVG onclick={() => setTab("Notifications")} active={tab == 'Notifications'} />
      <CreateSVG onclick={() => setTab("Create")} active={tab == 'Create'} />
      <SocialSVG onclick={() => setTab("Social")} active={tab == 'Social'} />
      <SettingsSVG onclick={() => setTab("Settings")} active={tab == 'Settings'} />
    </div>
  )
}
