import { createSlice } from '@reduxjs/toolkit'

export type UserListState = {
  name: string
  loading: boolean
  error: boolean
  deviceState: boolean 
}

export const setName = (name: string) => ({
  type: 'userList/setName',
  payload: name,
})

export const setDeviceState = (deviceState: boolean) => ({
  type: 'userList/setDeviceState',
  payload: deviceState,
})

const initialState: UserListState = {
  name: '',
  loading: false,
  error: false,
  deviceState: false,
}

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setDeviceState: (state, action) => {
      state.deviceState = action.payload
    },
  },
})

export default userListSlice.reducer
