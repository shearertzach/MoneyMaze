import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addBillPending, addBillRejected, addBillSuccess, addFriendPending, addFriendRejected, addFriendSuccess, signInPending, signInRejected, signInSuccess } from './builderfunctions'


const initialState = {
  user: {
    email: null,
    username: null,
    loggedIn: false,
  },
  bills: [],
  friends: [],
  groups: [],
  loading: false,
  error: null
}

export const signin = createAsyncThunk(
  'auth/signin',
  async () => {
    return
  }
)

export const addBill = createAsyncThunk(
  'auth/addbill',
  async (bill) => {
    const total = 0
    bill.items.map(i => total += Number(i.price))
    const modified = {
      ...bill,
      date: new Date().toLocaleDateString(),
      total,
      pricePerPerson: total / (bill.users.length + 1)
    }
    return modified
  }
)

export const addFriend = createAsyncThunk(
  'auth/addfriend',
  async (friend) => {
    return friend
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: () => initialState,
    clearBills: (state) => {
      state.bills = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.rejected, signInRejected)
      .addCase(signin.pending, signInPending)
      .addCase(signin.fulfilled, signInSuccess)
      .addCase(addBill.rejected, addBillRejected)
      .addCase(addBill.pending, addBillPending)
      .addCase(addBill.fulfilled, addBillSuccess)
      .addCase(addFriend.rejected, addFriendRejected)
      .addCase(addFriend.pending, addFriendPending)
      .addCase(addFriend.fulfilled, addFriendSuccess)
  },
})

export const { signout, clearBills } = authSlice.actions
export const getAuthSlice = (state) => state.auth
export default authSlice.reducer