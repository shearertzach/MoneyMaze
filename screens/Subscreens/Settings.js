import React from 'react'
import { useDispatch } from 'react-redux'
import { signout } from '../../redux/auth'

export default function Settings() {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(signout())}>Sign Out</button>
    </div>
  )
}
