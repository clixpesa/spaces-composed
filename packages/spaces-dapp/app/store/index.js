import { configureStore } from '@reduxjs/toolkit'
import spacesReducer from '../../features/spaces/spacesSlice'

export default configureStore({
  
  reducer: {
    spaces : spacesReducer
  },
})
