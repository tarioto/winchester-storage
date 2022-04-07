import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/pro-duotone-svg-icons'
import {
  Container,
  Flex,
  Heading,
  Text,
  StackDivider,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

function Home() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'green.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Units available
          </Text>
          <Heading>Winchester RV, boat and Classics Storage</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Centrally located in South Reno's fastest growing area. Conveniently
            located 1/2 mile from two major grocery stores, two major fuel
            stations and from highway 580 onramp.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={process.env.PUBLIC_URL + '/images/outside.png'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Home
