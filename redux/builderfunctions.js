export const signInRejected = (state, error) => {
  state.loading = false
  state.error = error.error.message
}

export const signInPending = (state) => {
  state.loading = true
  state.error = null
}

export const signInSuccess = (state, action) => {
  state.user.email = 'test@moneymaze.com'
  state.user.username = 'Money Maze'
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

export const addFriendRejected = (state, action) => {
  console.log(action)
  state.loading = false
  state.error = 'Could not add friend'
}

export const addFriendPending = (state, action) => {
  console.log(action)

  state.loading = false
  state.error = null
}

export const addFriendSuccess = (state, action) => {
  console.log(action)

  state.friends = [...state.friends, { ...action.payload }]
  state.loading = false
  state.error = null
}