import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMembers: [],
  spaceInfo: {
    name: null,
    type: null, //personal, rosca, regular, mchango
    members: [],
  },
  userSpaces: []
}

const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {
    setSelectedMembers: (state, action) => {
      state.selectedMembers = action.payload
    },
    setSpaceInfo: (state, { payload }) => {
      const { spaceName, spaceType } = payload 
      state.spaceInfo.members = state.selectedMembers
      state.spaceInfo.name = spaceName
      state.spaceInfo.type = spaceType
      console.log(state.spaceInfo)
    }
  }
})

export const { setSelectedMembers, setSpaceInfo } = spacesSlice.actions

export default spacesSlice.reducer