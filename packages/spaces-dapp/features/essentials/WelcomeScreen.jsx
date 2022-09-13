import { useNavigation } from '@react-navigation/native'
import { Box, VStack, Button, Heading, Spacer } from 'native-base'
import { useWalletConnect } from "@walletconnect/react-native-dapp";

export default function WelcomeScreen({navigation}) {
  const connector = useWalletConnect()
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="flex-end">
      <Box width="75%" mt="3/4">
        <Heading textAlign="center" color="blueGray.700">
          Step into the future of money with Clixpesa
        </Heading>
      </Box>
      <Spacer />
      <VStack alignItems="center" space={3} mb="10">
        <Button
          rounded="3xl"
          pr="4"
          minW="75%"
          _text={{ color: 'primary.100', fontWeight: 'semibold', mb: '0.5' }}
          onPress={() => connector.connect()}
        >
          Connect Wallet
        </Button>
      </VStack>
    </Box>
  )
}
