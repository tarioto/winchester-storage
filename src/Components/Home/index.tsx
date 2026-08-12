import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  SimpleGrid,
  Text,
  Link,
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
          <Stack gap={2}>
            <Link
              href="mailto:lee@winchesterrvandboatstorage.com"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="xl"
              color="blue.500"
            >
              <Mail size={20} />
              lee@winchesterrvandboatstorage.com
            </Link>
            <Link
              href="tel:+1-775-447-0573"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="xl"
              color="blue.500"
            >
              <Phone size={20} />
              +1-775-447-0573
            </Link>
          </Stack>
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
