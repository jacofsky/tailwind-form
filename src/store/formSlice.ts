import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAddon, IForm, IInfo, IPlan } from '../types'


  
// Define the initial state using that type
const initialState: IForm = {
  info: null,
  plan: null,
  addons: null,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<IInfo | null>) => {
      state.info = action.payload
    },
    setPlan: (state, action: PayloadAction<IPlan | null>) => {
      state.plan = action.payload
    },
    setAddons: (state, action: PayloadAction<IAddon[]>) => {
      state.addons = action.payload
    }  
  }
})