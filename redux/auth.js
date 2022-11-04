import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import { addBillPending, addBillRejected, addBillSuccess, addFriendPending, addFriendRejected, addFriendSuccess, editBillPending, editBillRejected, editBillSuccess, signInPending, signInRejected, signInSuccess } from './builderfunctions'

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
    const provider = new GoogleAuthProvider()
    const login = await signInWithPopup(auth, provider)
    const user = login.user
    return user
  }
)

export const addBill = createAsyncThunk(
  'auth/addbill',
  async (bill) => {
    const total = 0
    bill.items.map(i => total += Number(i.price))
    const modified = {
      ...bill,
      total,
      pricePerPerson: total / (bill.users.length + 1)
    }
    return modified
  }
)

export const editBill = createAsyncThunk(
  'auth/editbill',
  async ({ billid, userid }) => {
    return { billid, userid }
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
      .addCase(editBill.rejected, editBillRejected)
      .addCase(editBill.pending, editBillPending)
      .addCase(editBill.fulfilled, editBillSuccess)
      .addCase(addFriend.rejected, addFriendRejected)
      .addCase(addFriend.pending, addFriendPending)
      .addCase(addFriend.fulfilled, addFriendSuccess)
  },
})

export const { signout, clearBills } = authSlice.actions
export const getAuthSlice = (state) => state.auth
export default authSlice.reducer