import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import  productSlice  from './productslice'
import demandeSlice from './demandeSlice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    product:productSlice,
    demande:demandeSlice
  },
})