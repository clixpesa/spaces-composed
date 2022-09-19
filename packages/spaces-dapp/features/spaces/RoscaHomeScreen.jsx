import { Box, Text, Image, HStack, Button, Spacer, VStack, Progress, Avatar} from 'native-base'
import { HeaderBackButton } from '@react-navigation/elements'
import { useLayoutEffect, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Web3 from "web3";
import roscaContract from "../../../hardhat/artifacts/contracts/Rosca.sol/Rosca.json"

const web3 = new Web3("https://alfajores-forno.celo-testnet.org");

export default function RoscaHomeScreen({navigation, route}) {

  const Spaces = route.params.Spaces
  const contract = Spaces ? new web3.eth.Contract(Spaces.abi, Spaces.address) : null

  const [isFetching, setIsFetching] = useState(false)
  const [roscaAddress, setRoscaAddress] = useState("0x36Be549243cE18262f07Ad131d8525c1cF4ed0b4")
  const [roscaDetails, setRoscaDetails] = useState("")

  useEffect(() => {
    setIsFetching(true)
    async function fetchSpaces(){
      const result = (await contract?.methods.returnSpaces().call())
      console.log(result)
      setRoscaAddress(result[result.length - 1])
    }
    async function fetchSpaceData(){
      const rcContract = Spaces ? new web3.eth.Contract(roscaContract.abi, roscaAddress) : null
      const roscaData = (await rcContract.methods.getDetails().call())
      console.log(roscaData)
    }
    try {
      Promise.all(fetchSpaceData())   
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }, [navigation])
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => {
        return(
          <HeaderBackButton {...props} onPress={()=>{navigation.navigate("Spaces")}}/>
        )
      }
    });
  }, [navigation]); 

  

  
  const prog = (300.89/5000.00)*100
  return (
    <Box flex={1} bg="muted.100" >
      <Image source={{
      uri: "https://images.unsplash.com/photo-1493655430214-3dd7718460bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }} alt="Your groups photo" height="35%" minH={240}/>
      <Box position="absolute" top="11%" left={3}>
        <Box bg="rgba(52, 52, 52, 0.3)" w="60%" rounded="lg">
          <Box p={3}>
            <Text fontSize="md" fontWeight="medium" color="white" lineHeight="xs">Balance (cUSD)</Text>
          <Text fontSize="3xl" fontWeight="semibold" color="white">500.00</Text>
          <Text fontSize="sm" color="white" lineHeight="xs">≈ 50000.00 KES</Text>
        </Box>
          </Box>
        <HStack space={2} mt={3}>
          <Button variant="subtle" rounded="3xl" w="25%"
            _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
          >Fund</Button>
          <Button variant="subtle" rounded="3xl" w="25%"
            _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
          >Withdraw</Button>
          <Button variant="subtle" rounded="3xl" w="18%"
            _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
          >More</Button>
          <Button variant="subtle" rounded="3xl" w="15%"
            _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
          >set</Button>
        </HStack>
      </Box>
      <Box alignItems="center" mt={3}>
        <HStack mx="8" my="2">
          <Text fontWeight="medium" color="blueGray.600">
            Round: 2
          </Text>
          <Spacer />
          <Text _light={{ color: 'primary.600' }} fontWeight="medium" >
            Due for: Abedy
          </Text>
        </HStack>
        <Box bg="white" roundedTop="xl" roundedBottom="md" width="95%" >
          <VStack space={2}>
            <HStack mx="5" my="2">
              <Text fontWeight="semibold" fontSize="md" >
                Saved: {(prog).toFixed(1)}%
              </Text>
              <Spacer />
              <Text _light={{ color: 'muted.500' }} fontWeight="medium" pt={1}>
                300.89/5000.00 cUSD
              </Text>
            </HStack>
            <Progress colorScheme="primary" value={prog} mx="4" bg="primary.100"/>
            <HStack mx="5" my="2">
              <Text fontWeight="medium" color="muted.500">
                30 Sep 2022 - 30 days to go
              </Text>
              <Spacer />
              <Text _light={{ color: 'muted.500' }} fontWeight="medium" >
                2/5 Contributions
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box bg="white" roundedTop="md" roundedBottom="xl" width="95%" mt={1}>
          <HStack mx="5" my="2" pb={1}>
            <Text fontWeight="medium" fontSize="md" color="blueGray.600">
              Your Contribution
            </Text>
            <Spacer />
            <Text _light={{ color: 'primary.600' }} fontWeight="medium" py={1}>
              200/1635.89 cUSD
            </Text>
          </HStack>
        </Box>
      </Box>
      <Box alignItems="center" mt={3}>
        <HStack mx="8" my="2">
          <Text fontWeight="medium" color="blueGray.600">
            Transactions
          </Text>
          <Spacer />
          <Text _light={{ color: 'primary.600' }} fontWeight="medium" >
            See all
          </Text>
        </HStack>
        <VStack w="95%" space={0.5}>
          <Box bg="white" roundedTop="xl" roundedBottom="md">
            <HStack m={2}>
              <Avatar>AK</Avatar>
              <VStack minW="78%" ml={3}>
                <HStack >
                  <Text fontWeight="medium" color="blueGray.600">
                    Akimbo funded Round 2
                  </Text>
                  <Spacer />
                  <Text color="primary.600" fontWeight="medium" >
                  + 600
                  </Text>
                </HStack>
                <HStack>
                  <Text  color="blueGray.600">
                    Mon, 26 Jul, 10:30
                  </Text>
                  <Spacer />
                  <Text color="muted.500">
                    870/1667.78
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
          <Box bg="white" roundedTop="md" roundedBottom="xl">
            <HStack m={2}>
              <Avatar>BK</Avatar>
              <VStack minW="78%" ml={3}>
                <HStack >
                  <Text fontWeight="medium" color="blueGray.600">
                    Bishi funded Round 2
                  </Text>
                  <Spacer />
                  <Text color="primary.600" fontWeight="medium" >
                  + 500
                  </Text>
                </HStack>
                <HStack>
                  <Text  color="blueGray.600">
                    Mon, 26 Jul, 10:30
                  </Text>
                  <Spacer />
                  <Text color="muted.500">
                    500/1667.78
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
