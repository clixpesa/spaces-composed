import { Box, Text, Image, FormControl, Stack, Input, Button, HStack, VStack, Select, Avatar } from 'native-base'
import { CheckIcon } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSpaceInfo } from './spacesSlice'
import { useNavigation } from '@react-navigation/native'

export default function CustomizeScreen() {
  const suggestions = ["Savings", "Vacation", "Chama", "Gift", "Sherehe", "Emergency", "Masomo"]
  const selectedMembers = useSelector((state) => state.spaces.selectedMembers)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [spaceName, setSpaceName] = useState('')
  const [spaceType, setSpaceType] = useState('')
  return (
    <Box flex={1} bg="muted.50" >

      <Image source={{
      uri: "https://images.unsplash.com/photo-1493655430214-3dd7718460bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }} alt="Your groups photo" height="35%" maxH={240}/>
      <FormControl alignItems="center" mt={2}>
      <Stack space={2} w="80%" >
        <Stack>
          <FormControl.Label>Name your space</FormControl.Label>
          <Input p={2} placeholder="Savings" size="lg" value={spaceName} onChangeText={(text) => setSpaceName(text)}/>
        </Stack>
        <HStack space={3} flexWrap="wrap">
          {suggestions.map((item) => {
            return (
              <Button size="sm" variant="subtle" shadow="1" mb={2} onPress={() => setSpaceName(item)}>{item}</Button>
            )
          })}
        </HStack>
        <Stack>
          <FormControl.Label>Select type of Group</FormControl.Label>
          <Select size="md" accessibilityLabel="Choose Group Type" placeholder="Group type" _selectedItem={{
            bg: "primary.600", endIcon: <CheckIcon size={2} color="muted.200"/> }} mt="1" 
            onValueChange={type => setSpaceType(type)} >
          <Select.Item label="Regular Group" value="regular" />
          <Select.Item label="Chamaa (ROSCA) Group" value="rosca" />
          <Select.Item label="Contribution Group" value="mchango" />
        </Select>
        </Stack>
        <Stack>
          <FormControl.Label>Members: {selectedMembers.length}</FormControl.Label>
          <HStack py={2} space={3}>
            {selectedMembers.map((members)=>{
              return(
                <SelectedMembers nameInitials={members.name[0].toUpperCase()} name={members.name}/>
              )
            })}
            
          </HStack>
        </Stack>
        <Stack alignItems="center">
          <Button variant="subtle" rounded="3xl" w="60%"
      _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
      onPress={() => {
        dispatch(setSpaceInfo({spaceName, spaceType}))
        navigation.navigate("RoscaGoal")
      }}
      >
        Continue
      </Button>
        </Stack>
      </Stack>
    </FormControl>
    </Box>
  )
}

function SelectedMembers (props){
  return(
      <VStack alignItems="center">
        <Avatar >
      {props.nameInitials}
    </Avatar>
    <Text fontSize="xs">{props.name}</Text>
      </VStack>
  )
}