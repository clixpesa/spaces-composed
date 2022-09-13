import { Box, Text } from 'native-base'
import { useSelector } from 'react-redux'

export default function AccountScreen() {
  const account = useSelector((state) => state.wallet)
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Just a DummyScreen</Text>
    </Box>
  )
}
