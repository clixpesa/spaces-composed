import { Box, Text, Button } from 'native-base'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function SpacesScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Savings Here!!</Text>
      <Button onPress={() => navigation.navigate('SelectContacts')}>
        Create Group Space
      </Button>
    </Box>
  )
}
