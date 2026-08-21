import { Box, Container, Heading, Stack, Text, Link } from '@chakra-ui/react'
import { Mail, Phone, Warehouse } from 'lucide-react'

// Temporarily hidden — flip to true to bring the badge back.
const SHOW_UNITS_AVAILABLE_BADGE = false

function Home() {
  return (
    <Box
      minH={{ base: '560px', md: '640px' }}
      display="flex"
      alignItems="center"
      color="white"
      backgroundPosition={{ base: 'right center', md: 'center' }}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(21,35,60,0.92), rgba(30,52,88,0.6) 55%, rgba(30,52,88,0.2)), url('/images/motorhome.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <Container maxW={'5xl'} py={12}>
        <Stack gap={4} maxW={'2xl'}>
          {SHOW_UNITS_AVAILABLE_BADGE && (
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
          )}
          <Heading size={'3xl'}>
            Winchester RV, boat and Classics Storage
          </Heading>
          <Text color={'gray.200'} fontSize={'lg'}>
            Centrally located in South Reno's fastest growing area. Conveniently
            located 1/2 mile from two major grocery stores, two major fuel
            stations and from highway 580 onramp.
          </Text>
          <Stack gap={2} mt={2}>
            <Link
              href="mailto:lee@winchesterrvandboatstorage.com"
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="xl"
              color="blue.200"
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
              color="blue.200"
            >
              <Phone size={20} />
              +1-775-447-0573
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
