import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: null,
    username: null,
    loggedIn: false,
  },
  loading: false,
  error: null
}

export const signin = createAsyncThunk(
  'auth/signin',
  async () => {
    return
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.rejected, (state, error) => {
        state.loading = false
        state.error = error.error.message
      })
      .addCase(signin.pending, (state) => {
        state.loading = true
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user.email = 'test@moneymaze.com'
        state.user.username = 'Money Maze'
        state.user.loggedIn = true
        state.loading = false
      });
  },
})

export const { signout } = authSlice.actions
export const getAuthSlice = (state) => state.auth
export default authSlice.reducer