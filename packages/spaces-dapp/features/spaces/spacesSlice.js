import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMembers: [],
  spaceInfo: {
    name: null,
    type: null, //personal, rosca, regular, mchango
    members: [],
    goalSchedule: {},
    goalAmount: null
  },
  roscaSchedule: {
      //daily/daily, mon/weekly/monthly
      ctbSchedule: {day: "Mon", occurrence: "Weekly"},
      //manual/manual, mon/weekly/monthly, date/once 
      disbSchedule: {day: "Tue", occurrence: "Weekly"}
    },
  userSpaces: {
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
      state.roscaSchedule.ctbSchedule = payload,
      state.spaceInfo.goalSchedule = state.roscaSchedule
    },
    setDisbSchedule: (state, { payload } ) => {
      state.roscaSchedule.disbSchedule = payload,
      state.spaceInfo.goalSchedule = state.roscaSchedule
    },
    setGoalAmount: (state, { payload }) => {
      state.spaceInfo.goalAmount = payload
    },
    setUserSpaces: (state) => {
      if(state.spaceInfo.type === "rosca"){
        state.userSpaces.roscas.push(state.spaceInfo)
      }else if(state.spaceInfo.type === "personal"){
        state.userSpaces.personal.push(state.spaceInfo)
      }
      console.log(state.userSpaces)
    }
  }
})

export const { setSelectedMembers, setSpaceInfo, setCtbSchedule, setDisbSchedule, setGoalAmount,setUserSpaces } = spacesSlice.actions

export default spacesSlice.reducer