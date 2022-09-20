import { Box, Text, VStack, Spacer, Button, Stack, HStack, Input, Pressable, Actionsheet, useDisclose, FlatList } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Web3 from "web3"
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { useNavigation } from '@react-navigation/native'
import roscaContract from "../../../hardhat/artifacts/contracts/Rosca.sol/Rosca.json"

const web3 = new Web3("https://alfajores-forno.celo-testnet.org");

export default function FundRound({navigation, route}) {
  const Spaces = route.params.Spaces
  const contract = Spaces ? new web3.eth.Contract(Spaces.abi, Spaces.address) : null

  const connector = useWalletConnect()
  const dispatch = useDispatch()
  const spaceInfo = useSelector((state) => state.spaces.roscaDetails)

  const [amount, setAmount] = useState("0")
  const userAddress = connector.accounts[0]
  const [isLoading, setIsLoading] = useState(false)

  const fundRound = async () => {
		setIsLoading(true);
    const ctbAmount = web3.utils.toWei(amount)
    const rcContract = Spaces ? new web3.eth.Contract(roscaContract.abi, spaceInfo.roscaAddress) : null
    let amount = Web3.utils.toHex(ctbAmount)
    console.log(amount)
    try{
    let txData = await rcContract?.methods.fundRound(amount).encodeABI();
    await connector.sendTransaction({
      from: userAddress,
      to: contractAddress,
      value: amount,
      data: txData,
    })
    } catch (error) {
      console.log(error)
  } finally {
			setIsLoading(false);
      navigation.navigate("RoscaHome")
		}
	};

  return (
    <Box flex={1} bg="muted.100" alignItems="center">
      <VStack space={3}>
        <Text mx={6} mt={8}>
          Set an amount to contribute
        </Text>
        <Stack mx={2} space={1}>
          <Box bg="white" roundedTop="xl" roundedBottom="md">
            <HStack m={3} space="xl">
              <Text fontSize="lg" py={3} pl={4} fontWeight="semibold">CELO</Text>
              <Input py={2} textAlign="right" minW="2/3" placeholder="0.00" size="lg" keyboardType="numeric"
              InputRightElement={<Text fontSize="md" fontWeight="medium" pr={3}>CELO</Text>}
              value={amount} onChangeText={(text) => setAmount(text)}
              />
            </HStack>
            <Text px={5} mb={3}>You contribute: {spaceInfo.ctbAmount} CELO</Text>
          </Box>
        
        </Stack>
        <Button isLoading={isLoading} isLoadingText="Submitting" rounded="3xl" w="60%"
      _text={{ color: 'primary.100', fontWeight: 'semibold', mb: '0.5' }}
      onPress={()=>{
        fundRound()
      }}>Continue</Button>
      </VStack>
    </Box>
    
  )
}

