import { Box, Text } from 'native-base'
import { useSelector } from 'react-redux'

export default function MoreScreen() {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>The More screen</Text>
    </Box>
  )
}
