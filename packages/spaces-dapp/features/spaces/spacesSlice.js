import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useWalletConnect } from "@walletconnect/react-native-dapp"
import Web3 from "web3";
import roscaContract from "../../../hardhat/artifacts/contracts/Rosca.sol/Rosca.json"

export const getRosca = createAsyncThunk("spaces/getRosca", async(address, thunkAPI) => {
  const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
  const rcContract = new web3.eth.Contract(roscaContract.abi, address)
  try {
    const roscaData = (await rcContract.methods.getDetails().call())
    return roscaData
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong')
  }
})

export const getRoscaAddress= createAsyncThunk("spaces/getRoscaAddress", async(spacesContract, thunkAPI) => {
  try {
    const result = (await spacesContract?.methods.returnSpaces().call())
    thunkAPI.dispatch(getRosca(result[result.length - 1]))
    return result[result.length - 1]
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong')
  }
})

const initialState = {
  isLoading: true,
  selectedMembers: [],
  spaceInfo: {
    // for space creation
    name: null,
    type: null, //personal, rosca, regular, mchango
    authCode: "369bC1",
    members: [], //!TODO always include creator. 
    goalAmount: null,
    ctbAmount: null,
    ctbDay: "Monday",
    ctbOccurence: "Weekly",
    disbDay: "Tuesday",
    disbOccurence: "Weekly",
    creator: null //creator user address
  },
  roscaAddress: null,
  roscaDetails: {
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
  },
  extraReducers: {
    [getRosca.pending]: (state) => {
      state.isLoading = true;
    },
    [getRosca.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roscaDetails = action.payload;
      console.log(state.roscaDetails);
    },
    [getRosca.rejected]: (state) => {
      state.isLoading = false;
    },
    [getRoscaAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [getRoscaAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roscaAddress = action.payload;
      console.log(state.roscaAddress);
    },
    [getRoscaAddress.rejected]: (state) => {
      state.isLoading = false;
    },
  },
})

export const { setSelectedMembers, setSpaceInfo, setCtbSchedule, setDisbSchedule, setGoalAmount,setUserSpaces } = spacesSlice.actions

export default spacesSlice.reducer