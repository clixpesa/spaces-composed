import {
  Heading,
  Box,
  Text,
  Button,
  VStack,
  AspectRatio,
  Image,
  HStack,
  Icon,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from 'native-base';

export default function SpacesScreen() {
  const navigation = useNavigation();
  return (
    <Box
      flex={1}
      // bg="#fff"
      alignItems="center"
      justifyContent="flex-start"
      p={6}
    >
      <Box p={2}>
        <Heading>Start saving together today</Heading>
        <Text>
          What would you like to save for ? Who would you like to save with ?
        </Text>
      </Box>
      <Box>
        <Text></Text>
      </Box>
      {/* <Button onPress={() => navigation.navigate('AddName')}>
        Create Spaces
      </Button> */}

      <Box>
        <Text>Personal Saving spaces</Text>
        <HStack>
          <Box bg="#fff" rounded="xl" padding="2" marginRight="2" width="50%">
            <AspectRatio width="100%">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }}
                borderRadius={6}
                alt="spaces"
              />
            </AspectRatio>
            <HStack mt="2" display="flex" justifyContent="space-between">
              <VStack>
                <Text bold>Save for a Goal</Text>
                <Text>Save Today</Text>
              </VStack>
              <Box bg="primary.100" rounded="full" alignItems="center" ml="1">
                <Icon
                  // as={MaterialCommunityIcons}
                  name="plus"
                  size="lg"
                  color="primary.600"
                  m="2"
                />
              </Box>
            </HStack>
          </Box>

          <Box bg="#fff" rounded="xl" padding="2" width="50%">
            <AspectRatio w="100%">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }}
                borderRadius={6}
                alt="spaces"
              />
            </AspectRatio>
            <HStack mt="2" display="flex" justifyContent="space-between">
              <VStack>
                <Text bold>Start a Personal</Text>
                <Text>Savings Space</Text>
              </VStack>
              <Box bg="primary.100" rounded="full" alignItems="center" ml="1">
                <Icon
                  // as={MaterialCommunityIcons}
                  name="plus"
                  size="lg"
                  color="primary.600"
                  m="2"
                />
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Box>
        <Text>Group Saving spaces</Text>
        <HStack>
          <Box bg="#fff" rounded="xl" padding="2" marginRight="2" width="50%">
            <AspectRatio width="100%">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }}
                borderRadius={6}
                alt="spaces"
              />
            </AspectRatio>
            <HStack mt="2" display="flex" justifyContent="space-between">
              <VStack>
                <Text bold>Join Thousands</Text>
                <Text>Saving Today</Text>
              </VStack>
              <Box bg="primary.100" rounded="full" alignItems="center" ml="1">
                <Icon
                  // as={MaterialCommunityIcons}
                  name="plus"
                  size="lg"
                  color="primary.600"
                  m="2"
                />
              </Box>
            </HStack>
          </Box>

          <Box bg="#fff" rounded="xl" padding="2" width="50%">
            <AspectRatio w="100%">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }}
                borderRadius={6}
                alt="spaces"
              />
            </AspectRatio>
            <HStack mt="2" display="flex" justifyContent="space-between">
              <VStack>
                <Text bold>Start a Group</Text>
                <Text>Savings Space</Text>
              </VStack>
              <Box bg="primary.100" rounded="full" alignItems="center" ml="1">
                <Icon
                  // as={MaterialCommunityIcons}
                  name="plus"
                  size="lg"
                  color="primary.600"
                  m="2"
                />
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
