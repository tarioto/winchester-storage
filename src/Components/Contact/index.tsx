import { Box, chakra, SimpleGrid, Container, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/pro-duotone-svg-icons'

function Contact() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
          Interested? Contact us to find out more!
        </chakra.h1>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <Button
          variant={'solid'}
          colorScheme={'teal'}
          size={'sm'}
          ml={4}
          leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
        >
          Email
        </Button>
        <Button
          variant={'solid'}
          colorScheme={'teal'}
          size={'sm'}
          ml={4}
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
        >
          Call
        </Button>
      </SimpleGrid>
    </Container>
  )
}

export default Contact
