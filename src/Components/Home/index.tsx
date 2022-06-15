import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  Center,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWarehouse,
  faEnvelope,
  faPhone,
} from '@fortawesome/pro-duotone-svg-icons'

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
            <FontAwesomeIcon icon={faWarehouse} /> Units available
          </Text>
          <Heading>Winchester RV, boat and Classics Storage</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Centrally located in South Reno's fastest growing area. Conveniently
            located 1/2 mile from two major grocery stores, two major fuel
            stations and from highway 580 onramp.
          </Text>
          {/* <Button
            variant={'solid'}
            colorScheme={'blue'}
            size={'lg'}
            ml={4}
            leftIcon={<FontAwesomeIcon icon={faMessageMiddle} />}
          >
            Get in Touch
          </Button> */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <Button
              variant={'solid'}
              colorScheme={'blue'}
              size={'lg'}
              leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
              onClick={(e) => {
                window.location.href = `mailto:lee@winchesterrvandboatstorage.com`
                e.preventDefault()
              }}
            >
              Email
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'blue'}
              size={'lg'}
              leftIcon={<FontAwesomeIcon icon={faPhone} />}
              onClick={(e) => {
                window.location.href = `tel:+1-775-447-0573`
                e.preventDefault()
              }}
            >
              Call
            </Button>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <Heading as="h6" size="xs">
              <Center>lee@winchesterrvandboatstorage.com</Center>
            </Heading>
            <Heading as="h6" size="xs">
              <Center>+1-775-447-0573</Center>
            </Heading>
          </SimpleGrid>
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
            alt={'hero'}
            src={process.env.PUBLIC_URL + '/images/motorhome.jpg'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Home
