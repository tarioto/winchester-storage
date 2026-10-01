import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <Box bg="bg.muted">
      <Container bg="bg.muted" maxW={'5xl'} py={12}>
        <Box
          maxW="7xl"
          mx={'auto'}
          pt={5}
          pb={10}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <Heading textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
            Interested? Contact us to find out more!
          </Heading>
        </Box>
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
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 5, lg: 8 }}
          mt={4}
        >
          <Heading as="h4" size="md">
            <Center>
              <Link href="mailto:lee@winchesterrvandboatstorage.com">
                lee@winchesterrvandboatstorage.com
              </Link>
            </Center>
          </Heading>
          <Heading as="h4" size="md">
            <Center>
              <Link href="tel:+1-775-447-0573">+1-775-447-0573</Link>
            </Center>
          </Heading>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact
