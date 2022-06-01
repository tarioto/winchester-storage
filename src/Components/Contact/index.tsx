import {
  Box,
  SimpleGrid,
  Container,
  Button,
  useColorModeValue,
  Heading,
  Center,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/pro-duotone-svg-icons'

function Contact() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container
        bg={useColorModeValue('gray.100', 'gray.900')}
        maxW={'5xl'}
        py={12}
      >
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
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 5, lg: 8 }}
          mt={4}
        >
          <Heading as="h4" size="md">
            <Center>lee@winchesterrvandboatstorage.com</Center>
          </Heading>
          <Heading as="h4" size="md">
            <Center>+1-775-447-0573</Center>
          </Heading>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact
