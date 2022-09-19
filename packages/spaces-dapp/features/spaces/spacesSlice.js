import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMembers: [],
  spaceInfo: {
    // for space creation
    name: null,
    type: null, //personal, rosca, regular, mchango
    members: [], //!TODO always include creator. 
    goalAmount: null,
    ctbAmount: null,
    ctbDay: "Monday",
    ctbOccurence: "Weekly",
    disbDay: "Tuesday",
    disbOccurence: "Weekly",
    creator: null //creator user address
  },
  userSpaces: {
    // updated from contracts
    roscas: [],
    personal: [],
    regular: [],
    mchango: [],
  }
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
    },
    setCtbSchedule: (state, { payload } ) => {
      state.spaceInfo.ctbDay = payload.day,
      state.spaceInfo.ctbOccurence = payload.occurrence
    },
    setDisbSchedule: (state, { payload } ) => {
      state.spaceInfo.disbDay = payload.day,
      state.spaceInfo.disbOccurence = payload.occurrence
      
    },
    setGoalAmount: (state, { payload }) => {
      const size = state.spaceInfo.members.length
      state.spaceInfo.goalAmount = payload
      state.spaceInfo.ctbAmount = (size ? (payload/state.spaceInfo.members.length) : payload) 
    },
    setUserSpaces: (state, { payload }) => {
      state.spaceInfo.creator = payload
      if(state.spaceInfo.type === "rosca"){
        state.userSpaces.roscas.push(state.spaceInfo)
      }else if(state.spaceInfo.type === "personal"){
        state.userSpaces.personal.push(state.spaceInfo)
      }
      
    }
  }
})

export const { setSelectedMembers, setSpaceInfo, setCtbSchedule, setDisbSchedule, setGoalAmount,setUserSpaces } = spacesSlice.actions

export default spacesSlice.reducer