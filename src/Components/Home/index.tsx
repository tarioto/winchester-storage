import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  SimpleGrid,
  Text,
  Button,
  Center,
} from '@chakra-ui/react'
import { Mail, Phone, Warehouse } from 'lucide-react'

function Home() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <Stack gap={4}>
          <Text
            textTransform={'uppercase'}
            color={'green.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg="green.subtle"
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            <Warehouse
              size={16}
              style={{ display: 'inline', verticalAlign: 'text-bottom' }}
            />{' '}
            Units available
          </Text>
          <Heading>Winchester RV, boat and Classics Storage</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Centrally located in South Reno's fastest growing area. Conveniently
            located 1/2 mile from two major grocery stores, two major fuel
            stations and from highway 580 onramp.
          </Text>
          {/* <Button
            variant={'solid'}
            colorPalette={'blue'}
            size={'lg'}
            ml={4}
          >
            <MessageCircle size={18} />
            Get in Touch
          </Button> */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 5, lg: 8 }}>
            <Button
              variant={'solid'}
              colorPalette={'blue'}
              size={'lg'}
              onClick={(e) => {
                window.location.href = `mailto:lee@winchesterrvandboatstorage.com`
                e.preventDefault()
              }}
            >
              <Mail size={18} />
              Email
            </Button>
            <Button
              variant={'solid'}
              colorPalette={'blue'}
              size={'lg'}
              onClick={(e) => {
                window.location.href = `tel:+1-775-447-0573`
                e.preventDefault()
              }}
            >
              <Phone size={18} />
              Call
            </Button>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 5, lg: 8 }}>
            <Heading as="h6" size="xs">
              <Center>lee@winchesterrvandboatstorage.com</Center>
            </Heading>
            <Heading as="h6" size="xs">
              <Center>+1-775-447-0573</Center>
            </Heading>
          </SimpleGrid>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'hero'}
            src={'/images/motorhome.jpg'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Home
