import { Box, Stack, Text, Heading, HStack, Button, Icon, Image, ScrollView, Spinner } from 'native-base'
import { Feather } from '@expo/vector-icons' //Fix feather not font
import Web3 from "web3";
import { useEffect, useState } from 'react';

const web3 = new Web3("https://alfajores-forno.celo-testnet.org");

export default function HomeScreen({ navigation, route }) {
  const Greeter = route.params.Greeter
  const contract = Greeter ? new web3.eth.Contract(Greeter.abi, Greeter.address) : null

  const [gettingGreeting, setGettingGreeting] = useState(false)
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGettingGreeting(true)
    async function fetchGreeting(){
      const result = (await contract?.methods.greet().call())
      setGreeting(result)
    }
    try {
      fetchGreeting()    
    } catch (error) {
      console.log(error)
    } finally {
      setGettingGreeting(false)
    }
  }, [navigation])
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {gettingGreeting ? <Spinner accessibilityLabel="Loading greeting" /> : null}
      <Box flex={1} bg="#F5F5F5" alignItems="center">
        <Box mt="2" bg="#fff" width="95%" rounded="2xl" shadow="none">
          <Stack mx="4" my="3">
            <Text _light={{ color: 'muted.700' }}>Actual Balance (KES)</Text>
            <Heading size="xl" letterSpacing="0.5" _light={{ color: 'muted.800' }}>
              23,300.89
            </Heading>
            <Text _light={{ color: 'muted.700' }} lineHeight="sm">
              ≈ 200.70 cUSD
            </Text>
          </Stack>
          <HStack mx="4" mb="2.5" space="3">
            <Button
              leftIcon={<Icon as={Feather} name="plus" size="md" color="primary.600" mr="1" />}
              variant="subtle"
              rounded="3xl"
              pr="4"
              _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
              onPress={() => console.log('deposit')}
            >
              Deposit
            </Button>
            <Button
              leftIcon={
                <Icon as={Feather} name="arrow-right" size="md" color="primary.600" mr="1" />
              }
              variant="subtle"
              rounded="3xl"
              pr="4"
              _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
              onPress={() => console.log('transfer')}
            >
              Transfer
            </Button>
            <Button
              leftIcon={<Icon as={Feather} name="more-horizontal" size="lg" color="primary.600" />}
              variant="subtle"
              rounded="3xl"
              px="5"
              _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
              onPress={() => console.log('more')}
            />
          </HStack>
        </Box>
        {/*Dummy shadow effect */}
        <Box bg="#fff" height={10} rounded="2xl" width="94.5%" shadow={1} mt="-10" zIndex={-1}>
          <Text color="#fff">Find a better way</Text>
        </Box>
        {/*news update*/}
        <Box bg="#fcfcfc" width="95%" rounded="md" mt="-5" zIndex="-2">
          <HStack space="3" m="3" mt="8">
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              rounded="md"
              width="52"
            />
            <Text maxW="70%">Get 5 cUSD with ClixCard and stand a chance to win 1 BTC</Text>
            <Icon as={Feather} name="list" size="lg" position="absolute" ml="92%" />
          </HStack>
        </Box>
      </Box>
      <Text>{greeting}</Text>
    </ScrollView>
  )
}
