import { current } from "@reduxjs/toolkit"

export const signInRejected = (state, error) => {
  state.loading = false
  state.error = error.error.message
}

export const signInPending = (state) => {
  state.loading = true
  state.error = null
}

export const signInSuccess = (state, action) => {
  state.user.email = action.payload.email
  state.user.username = action.payload.displayName
  state.user.loggedIn = true
  state.loading = false
  state.error = null
}

export const addBillRejected = (state, action) => {
  state.loading = false
  state.error = 'Could not add bill'
}

export const addBillPending = (state, action) => {
  state.loading = false
  state.error = null
}

export const addBillSuccess = (state, action) => {
  state.bills = [...state.bills, { ...action.payload }]
  state.loading = false
  state.error = null
}

export const editBillRejected = (state, action) => {
  state.loading = false
  state.error = 'Could not edit bill'
}

export const editBillPending = (state, action) => {
  state.loading = false
  state.error = null
}

export const editBillSuccess = (state, action) => {
  const currentState = current(state)
  const billIndex = currentState.bills.findIndex(b => b.id == action.payload.billid)
  const userIndex = currentState.bills[billIndex].users.findIndex(u => u.id == action.payload.userid)
  const userPaid = state.bills[billIndex].users[userIndex].paid

  state.bills[billIndex].users[userIndex].paid = !userPaid

  state.bills = [...state.bills]
  state.loading = false
  state.error = null
}

export const addFriendRejected = (state, action) => {
  state.loading = false
  state.error = 'Could not add friend'
}

export const addFriendPending = (state, action) => {
  state.loading = false
  state.error = null
}

export const addFriendSuccess = (state, action) => {
  state.friends = [...state.friends, { ...action.payload }]
  state.loading = false
  state.error = null
}